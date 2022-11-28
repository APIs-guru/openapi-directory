var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var GetNetworkSmUsersPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmUsersPathParams, _super);
    function GetNetworkSmUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkSmUsersPathParams.prototype, "networkId", void 0);
    return GetNetworkSmUsersPathParams;
}(SpeakeasyBase));
export { GetNetworkSmUsersPathParams };
var GetNetworkSmUsersQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmUsersQueryParams, _super);
    function GetNetworkSmUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=emails" }),
        __metadata("design:type", Array)
    ], GetNetworkSmUsersQueryParams.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], GetNetworkSmUsersQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=scope" }),
        __metadata("design:type", Array)
    ], GetNetworkSmUsersQueryParams.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=usernames" }),
        __metadata("design:type", Array)
    ], GetNetworkSmUsersQueryParams.prototype, "usernames", void 0);
    return GetNetworkSmUsersQueryParams;
}(SpeakeasyBase));
export { GetNetworkSmUsersQueryParams };
var GetNetworkSmUsersRequest = /** @class */ (function (_super) {
    __extends(GetNetworkSmUsersRequest, _super);
    function GetNetworkSmUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmUsersPathParams)
    ], GetNetworkSmUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmUsersQueryParams)
    ], GetNetworkSmUsersRequest.prototype, "queryParams", void 0);
    return GetNetworkSmUsersRequest;
}(SpeakeasyBase));
export { GetNetworkSmUsersRequest };
var GetNetworkSmUsersResponse = /** @class */ (function (_super) {
    __extends(GetNetworkSmUsersResponse, _super);
    function GetNetworkSmUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkSmUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkSmUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSmUsersResponse.prototype, "getNetworkSmUsers200ApplicationJsonObject", void 0);
    return GetNetworkSmUsersResponse;
}(SpeakeasyBase));
export { GetNetworkSmUsersResponse };
