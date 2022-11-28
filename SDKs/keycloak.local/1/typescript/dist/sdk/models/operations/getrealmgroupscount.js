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
var GetRealmGroupsCountPathParams = /** @class */ (function (_super) {
    __extends(GetRealmGroupsCountPathParams, _super);
    function GetRealmGroupsCountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmGroupsCountPathParams.prototype, "realm", void 0);
    return GetRealmGroupsCountPathParams;
}(SpeakeasyBase));
export { GetRealmGroupsCountPathParams };
var GetRealmGroupsCountQueryParams = /** @class */ (function (_super) {
    __extends(GetRealmGroupsCountQueryParams, _super);
    function GetRealmGroupsCountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetRealmGroupsCountQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top" }),
        __metadata("design:type", Boolean)
    ], GetRealmGroupsCountQueryParams.prototype, "top", void 0);
    return GetRealmGroupsCountQueryParams;
}(SpeakeasyBase));
export { GetRealmGroupsCountQueryParams };
var GetRealmGroupsCountRequest = /** @class */ (function (_super) {
    __extends(GetRealmGroupsCountRequest, _super);
    function GetRealmGroupsCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmGroupsCountPathParams)
    ], GetRealmGroupsCountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmGroupsCountQueryParams)
    ], GetRealmGroupsCountRequest.prototype, "queryParams", void 0);
    return GetRealmGroupsCountRequest;
}(SpeakeasyBase));
export { GetRealmGroupsCountRequest };
var GetRealmGroupsCountResponse = /** @class */ (function (_super) {
    __extends(GetRealmGroupsCountResponse, _super);
    function GetRealmGroupsCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmGroupsCountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRealmGroupsCountResponse.prototype, "getRealmGroupsCount2XxApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmGroupsCountResponse.prototype, "statusCode", void 0);
    return GetRealmGroupsCountResponse;
}(SpeakeasyBase));
export { GetRealmGroupsCountResponse };
