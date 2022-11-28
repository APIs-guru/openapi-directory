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
var PostServersIdActionsResetPasswordPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetPasswordPathParams, _super);
    function PostServersIdActionsResetPasswordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsResetPasswordPathParams.prototype, "id", void 0);
    return PostServersIdActionsResetPasswordPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsResetPasswordPathParams };
// PostServersIdActionsResetPassword201ApplicationJsonActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsResetPassword201ApplicationJsonActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetPassword201ApplicationJsonActionError, _super);
    function PostServersIdActionsResetPassword201ApplicationJsonActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetPassword201ApplicationJsonActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetPassword201ApplicationJsonActionError.prototype, "message", void 0);
    return PostServersIdActionsResetPassword201ApplicationJsonActionError;
}(SpeakeasyBase));
export { PostServersIdActionsResetPassword201ApplicationJsonActionError };
var PostServersIdActionsResetPassword201ApplicationJsonActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetPassword201ApplicationJsonActionResources, _super);
    function PostServersIdActionsResetPassword201ApplicationJsonActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsResetPassword201ApplicationJsonActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetPassword201ApplicationJsonActionResources.prototype, "type", void 0);
    return PostServersIdActionsResetPassword201ApplicationJsonActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsResetPassword201ApplicationJsonActionResources };
export var PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum;
(function (PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum) {
    PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum["Success"] = "success";
    PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum["Running"] = "running";
    PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum["Error"] = "error";
})(PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum || (PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum = {}));
var PostServersIdActionsResetPassword201ApplicationJsonAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetPassword201ApplicationJsonAction, _super);
    function PostServersIdActionsResetPassword201ApplicationJsonAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetPassword201ApplicationJsonAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsResetPassword201ApplicationJsonActionError)
    ], PostServersIdActionsResetPassword201ApplicationJsonAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetPassword201ApplicationJsonAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsResetPassword201ApplicationJsonAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsResetPassword201ApplicationJsonAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsResetPassword201ApplicationJsonActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsResetPassword201ApplicationJsonAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetPassword201ApplicationJsonAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetPassword201ApplicationJsonAction.prototype, "status", void 0);
    return PostServersIdActionsResetPassword201ApplicationJsonAction;
}(SpeakeasyBase));
export { PostServersIdActionsResetPassword201ApplicationJsonAction };
var PostServersIdActionsResetPassword201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetPassword201ApplicationJson, _super);
    function PostServersIdActionsResetPassword201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsResetPassword201ApplicationJsonAction)
    ], PostServersIdActionsResetPassword201ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root_password" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetPassword201ApplicationJson.prototype, "rootPassword", void 0);
    return PostServersIdActionsResetPassword201ApplicationJson;
}(SpeakeasyBase));
export { PostServersIdActionsResetPassword201ApplicationJson };
var PostServersIdActionsResetPasswordRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetPasswordRequest, _super);
    function PostServersIdActionsResetPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsResetPasswordPathParams)
    ], PostServersIdActionsResetPasswordRequest.prototype, "pathParams", void 0);
    return PostServersIdActionsResetPasswordRequest;
}(SpeakeasyBase));
export { PostServersIdActionsResetPasswordRequest };
var PostServersIdActionsResetPasswordResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetPasswordResponse, _super);
    function PostServersIdActionsResetPasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsResetPasswordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsResetPassword201ApplicationJson)
    ], PostServersIdActionsResetPasswordResponse.prototype, "postServersIdActionsResetPassword201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsResetPasswordResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsResetPasswordResponse;
}(SpeakeasyBase));
export { PostServersIdActionsResetPasswordResponse };
