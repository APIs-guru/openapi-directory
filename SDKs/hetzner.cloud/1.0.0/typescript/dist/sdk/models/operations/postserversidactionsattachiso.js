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
var PostServersIdActionsAttachIsoPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachIsoPathParams, _super);
    function PostServersIdActionsAttachIsoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAttachIsoPathParams.prototype, "id", void 0);
    return PostServersIdActionsAttachIsoPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsAttachIsoPathParams };
var PostServersIdActionsAttachIsoRequestBody = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachIsoRequestBody, _super);
    function PostServersIdActionsAttachIsoRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachIsoRequestBody.prototype, "iso", void 0);
    return PostServersIdActionsAttachIsoRequestBody;
}(SpeakeasyBase));
export { PostServersIdActionsAttachIsoRequestBody };
// PostServersIdActionsAttachIsoActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsAttachIsoActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachIsoActionResponseActionError, _super);
    function PostServersIdActionsAttachIsoActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachIsoActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachIsoActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsAttachIsoActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsAttachIsoActionResponseActionError };
var PostServersIdActionsAttachIsoActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachIsoActionResponseActionResources, _super);
    function PostServersIdActionsAttachIsoActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAttachIsoActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachIsoActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsAttachIsoActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsAttachIsoActionResponseActionResources };
export var PostServersIdActionsAttachIsoActionResponseActionStatusEnum;
(function (PostServersIdActionsAttachIsoActionResponseActionStatusEnum) {
    PostServersIdActionsAttachIsoActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsAttachIsoActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsAttachIsoActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsAttachIsoActionResponseActionStatusEnum || (PostServersIdActionsAttachIsoActionResponseActionStatusEnum = {}));
var PostServersIdActionsAttachIsoActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachIsoActionResponseAction, _super);
    function PostServersIdActionsAttachIsoActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachIsoActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsAttachIsoActionResponseActionError)
    ], PostServersIdActionsAttachIsoActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachIsoActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAttachIsoActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAttachIsoActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsAttachIsoActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsAttachIsoActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachIsoActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachIsoActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsAttachIsoActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsAttachIsoActionResponseAction };
var PostServersIdActionsAttachIsoActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachIsoActionResponse, _super);
    function PostServersIdActionsAttachIsoActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsAttachIsoActionResponseAction)
    ], PostServersIdActionsAttachIsoActionResponse.prototype, "action", void 0);
    return PostServersIdActionsAttachIsoActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsAttachIsoActionResponse };
var PostServersIdActionsAttachIsoRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachIsoRequest, _super);
    function PostServersIdActionsAttachIsoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsAttachIsoPathParams)
    ], PostServersIdActionsAttachIsoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServersIdActionsAttachIsoRequestBody)
    ], PostServersIdActionsAttachIsoRequest.prototype, "request", void 0);
    return PostServersIdActionsAttachIsoRequest;
}(SpeakeasyBase));
export { PostServersIdActionsAttachIsoRequest };
var PostServersIdActionsAttachIsoResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachIsoResponse, _super);
    function PostServersIdActionsAttachIsoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsAttachIsoActionResponse)
    ], PostServersIdActionsAttachIsoResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachIsoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsAttachIsoResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsAttachIsoResponse;
}(SpeakeasyBase));
export { PostServersIdActionsAttachIsoResponse };
