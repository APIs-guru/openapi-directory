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
var GetRealmUsersIdConsentsPathParams = /** @class */ (function (_super) {
    __extends(GetRealmUsersIdConsentsPathParams, _super);
    function GetRealmUsersIdConsentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetRealmUsersIdConsentsPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmUsersIdConsentsPathParams.prototype, "realm", void 0);
    return GetRealmUsersIdConsentsPathParams;
}(SpeakeasyBase));
export { GetRealmUsersIdConsentsPathParams };
var GetRealmUsersIdConsentsRequest = /** @class */ (function (_super) {
    __extends(GetRealmUsersIdConsentsRequest, _super);
    function GetRealmUsersIdConsentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmUsersIdConsentsPathParams)
    ], GetRealmUsersIdConsentsRequest.prototype, "pathParams", void 0);
    return GetRealmUsersIdConsentsRequest;
}(SpeakeasyBase));
export { GetRealmUsersIdConsentsRequest };
var GetRealmUsersIdConsentsResponse = /** @class */ (function (_super) {
    __extends(GetRealmUsersIdConsentsResponse, _super);
    function GetRealmUsersIdConsentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmUsersIdConsentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetRealmUsersIdConsentsResponse.prototype, "getRealmUsersIdConsents2XxApplicationJsonObjects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmUsersIdConsentsResponse.prototype, "statusCode", void 0);
    return GetRealmUsersIdConsentsResponse;
}(SpeakeasyBase));
export { GetRealmUsersIdConsentsResponse };
