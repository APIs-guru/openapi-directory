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
var PostServersIdActionsEnableRescuePathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableRescuePathParams, _super);
    function PostServersIdActionsEnableRescuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsEnableRescuePathParams.prototype, "id", void 0);
    return PostServersIdActionsEnableRescuePathParams;
}(SpeakeasyBase));
export { PostServersIdActionsEnableRescuePathParams };
export var PostServersIdActionsEnableRescueRequestBodyTypeEnum;
(function (PostServersIdActionsEnableRescueRequestBodyTypeEnum) {
    PostServersIdActionsEnableRescueRequestBodyTypeEnum["Linux64"] = "linux64";
    PostServersIdActionsEnableRescueRequestBodyTypeEnum["Linux32"] = "linux32";
    PostServersIdActionsEnableRescueRequestBodyTypeEnum["Freebsd64"] = "freebsd64";
})(PostServersIdActionsEnableRescueRequestBodyTypeEnum || (PostServersIdActionsEnableRescueRequestBodyTypeEnum = {}));
var PostServersIdActionsEnableRescueRequestBody = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableRescueRequestBody, _super);
    function PostServersIdActionsEnableRescueRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_keys" }),
        __metadata("design:type", Array)
    ], PostServersIdActionsEnableRescueRequestBody.prototype, "sshKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableRescueRequestBody.prototype, "type", void 0);
    return PostServersIdActionsEnableRescueRequestBody;
}(SpeakeasyBase));
export { PostServersIdActionsEnableRescueRequestBody };
// PostServersIdActionsEnableRescue201ApplicationJsonActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsEnableRescue201ApplicationJsonActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableRescue201ApplicationJsonActionError, _super);
    function PostServersIdActionsEnableRescue201ApplicationJsonActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableRescue201ApplicationJsonActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableRescue201ApplicationJsonActionError.prototype, "message", void 0);
    return PostServersIdActionsEnableRescue201ApplicationJsonActionError;
}(SpeakeasyBase));
export { PostServersIdActionsEnableRescue201ApplicationJsonActionError };
var PostServersIdActionsEnableRescue201ApplicationJsonActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableRescue201ApplicationJsonActionResources, _super);
    function PostServersIdActionsEnableRescue201ApplicationJsonActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsEnableRescue201ApplicationJsonActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableRescue201ApplicationJsonActionResources.prototype, "type", void 0);
    return PostServersIdActionsEnableRescue201ApplicationJsonActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsEnableRescue201ApplicationJsonActionResources };
export var PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum;
(function (PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum) {
    PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum["Success"] = "success";
    PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum["Running"] = "running";
    PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum["Error"] = "error";
})(PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum || (PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum = {}));
var PostServersIdActionsEnableRescue201ApplicationJsonAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableRescue201ApplicationJsonAction, _super);
    function PostServersIdActionsEnableRescue201ApplicationJsonAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableRescue201ApplicationJsonAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsEnableRescue201ApplicationJsonActionError)
    ], PostServersIdActionsEnableRescue201ApplicationJsonAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableRescue201ApplicationJsonAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsEnableRescue201ApplicationJsonAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsEnableRescue201ApplicationJsonAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsEnableRescue201ApplicationJsonActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsEnableRescue201ApplicationJsonAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableRescue201ApplicationJsonAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableRescue201ApplicationJsonAction.prototype, "status", void 0);
    return PostServersIdActionsEnableRescue201ApplicationJsonAction;
}(SpeakeasyBase));
export { PostServersIdActionsEnableRescue201ApplicationJsonAction };
var PostServersIdActionsEnableRescue201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableRescue201ApplicationJson, _super);
    function PostServersIdActionsEnableRescue201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsEnableRescue201ApplicationJsonAction)
    ], PostServersIdActionsEnableRescue201ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root_password" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableRescue201ApplicationJson.prototype, "rootPassword", void 0);
    return PostServersIdActionsEnableRescue201ApplicationJson;
}(SpeakeasyBase));
export { PostServersIdActionsEnableRescue201ApplicationJson };
var PostServersIdActionsEnableRescueRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableRescueRequest, _super);
    function PostServersIdActionsEnableRescueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsEnableRescuePathParams)
    ], PostServersIdActionsEnableRescueRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServersIdActionsEnableRescueRequestBody)
    ], PostServersIdActionsEnableRescueRequest.prototype, "request", void 0);
    return PostServersIdActionsEnableRescueRequest;
}(SpeakeasyBase));
export { PostServersIdActionsEnableRescueRequest };
var PostServersIdActionsEnableRescueResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableRescueResponse, _super);
    function PostServersIdActionsEnableRescueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableRescueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsEnableRescue201ApplicationJson)
    ], PostServersIdActionsEnableRescueResponse.prototype, "postServersIdActionsEnableRescue201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsEnableRescueResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsEnableRescueResponse;
}(SpeakeasyBase));
export { PostServersIdActionsEnableRescueResponse };
