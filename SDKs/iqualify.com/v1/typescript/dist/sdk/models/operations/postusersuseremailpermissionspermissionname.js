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
var PostUsersUserEmailPermissionsPermissionNamePathParams = /** @class */ (function (_super) {
    __extends(PostUsersUserEmailPermissionsPermissionNamePathParams, _super);
    function PostUsersUserEmailPermissionsPermissionNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissionName" }),
        __metadata("design:type", String)
    ], PostUsersUserEmailPermissionsPermissionNamePathParams.prototype, "permissionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" }),
        __metadata("design:type", String)
    ], PostUsersUserEmailPermissionsPermissionNamePathParams.prototype, "userEmail", void 0);
    return PostUsersUserEmailPermissionsPermissionNamePathParams;
}(SpeakeasyBase));
export { PostUsersUserEmailPermissionsPermissionNamePathParams };
var PostUsersUserEmailPermissionsPermissionNameRequest = /** @class */ (function (_super) {
    __extends(PostUsersUserEmailPermissionsPermissionNameRequest, _super);
    function PostUsersUserEmailPermissionsPermissionNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersUserEmailPermissionsPermissionNamePathParams)
    ], PostUsersUserEmailPermissionsPermissionNameRequest.prototype, "pathParams", void 0);
    return PostUsersUserEmailPermissionsPermissionNameRequest;
}(SpeakeasyBase));
export { PostUsersUserEmailPermissionsPermissionNameRequest };
var PostUsersUserEmailPermissionsPermissionNameResponse = /** @class */ (function (_super) {
    __extends(PostUsersUserEmailPermissionsPermissionNameResponse, _super);
    function PostUsersUserEmailPermissionsPermissionNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUsersUserEmailPermissionsPermissionNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PostUsersUserEmailPermissionsPermissionNameResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUsersUserEmailPermissionsPermissionNameResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserResponse)
    ], PostUsersUserEmailPermissionsPermissionNameResponse.prototype, "userResponse", void 0);
    return PostUsersUserEmailPermissionsPermissionNameResponse;
}(SpeakeasyBase));
export { PostUsersUserEmailPermissionsPermissionNameResponse };
