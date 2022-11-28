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
import * as shared from "../shared";
var PutRealmUsersManagementPermissionsPathParams = /** @class */ (function (_super) {
    __extends(PutRealmUsersManagementPermissionsPathParams, _super);
    function PutRealmUsersManagementPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], PutRealmUsersManagementPermissionsPathParams.prototype, "realm", void 0);
    return PutRealmUsersManagementPermissionsPathParams;
}(SpeakeasyBase));
export { PutRealmUsersManagementPermissionsPathParams };
var PutRealmUsersManagementPermissionsRequest = /** @class */ (function (_super) {
    __extends(PutRealmUsersManagementPermissionsRequest, _super);
    function PutRealmUsersManagementPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutRealmUsersManagementPermissionsPathParams)
    ], PutRealmUsersManagementPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ManagementPermissionReference)
    ], PutRealmUsersManagementPermissionsRequest.prototype, "request", void 0);
    return PutRealmUsersManagementPermissionsRequest;
}(SpeakeasyBase));
export { PutRealmUsersManagementPermissionsRequest };
var PutRealmUsersManagementPermissionsResponse = /** @class */ (function (_super) {
    __extends(PutRealmUsersManagementPermissionsResponse, _super);
    function PutRealmUsersManagementPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutRealmUsersManagementPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagementPermissionReference)
    ], PutRealmUsersManagementPermissionsResponse.prototype, "managementPermissionReference", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutRealmUsersManagementPermissionsResponse.prototype, "statusCode", void 0);
    return PutRealmUsersManagementPermissionsResponse;
}(SpeakeasyBase));
export { PutRealmUsersManagementPermissionsResponse };
