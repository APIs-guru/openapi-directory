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
var PostServersIdActionsChangeDnsPtrPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeDnsPtrPathParams, _super);
    function PostServersIdActionsChangeDnsPtrPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeDnsPtrPathParams.prototype, "id", void 0);
    return PostServersIdActionsChangeDnsPtrPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsChangeDnsPtrPathParams };
var PostServersIdActionsChangeDnsPtrRequestBody = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeDnsPtrRequestBody, _super);
    function PostServersIdActionsChangeDnsPtrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeDnsPtrRequestBody.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeDnsPtrRequestBody.prototype, "ip", void 0);
    return PostServersIdActionsChangeDnsPtrRequestBody;
}(SpeakeasyBase));
export { PostServersIdActionsChangeDnsPtrRequestBody };
// PostServersIdActionsChangeDnsPtrActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsChangeDnsPtrActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeDnsPtrActionResponseActionError, _super);
    function PostServersIdActionsChangeDnsPtrActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeDnsPtrActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeDnsPtrActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsChangeDnsPtrActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsChangeDnsPtrActionResponseActionError };
var PostServersIdActionsChangeDnsPtrActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeDnsPtrActionResponseActionResources, _super);
    function PostServersIdActionsChangeDnsPtrActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeDnsPtrActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeDnsPtrActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsChangeDnsPtrActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsChangeDnsPtrActionResponseActionResources };
export var PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum;
(function (PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum) {
    PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum || (PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum = {}));
var PostServersIdActionsChangeDnsPtrActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeDnsPtrActionResponseAction, _super);
    function PostServersIdActionsChangeDnsPtrActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeDnsPtrActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsChangeDnsPtrActionResponseActionError)
    ], PostServersIdActionsChangeDnsPtrActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeDnsPtrActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeDnsPtrActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeDnsPtrActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsChangeDnsPtrActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsChangeDnsPtrActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeDnsPtrActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeDnsPtrActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsChangeDnsPtrActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsChangeDnsPtrActionResponseAction };
var PostServersIdActionsChangeDnsPtrActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeDnsPtrActionResponse, _super);
    function PostServersIdActionsChangeDnsPtrActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsChangeDnsPtrActionResponseAction)
    ], PostServersIdActionsChangeDnsPtrActionResponse.prototype, "action", void 0);
    return PostServersIdActionsChangeDnsPtrActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsChangeDnsPtrActionResponse };
var PostServersIdActionsChangeDnsPtrRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeDnsPtrRequest, _super);
    function PostServersIdActionsChangeDnsPtrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsChangeDnsPtrPathParams)
    ], PostServersIdActionsChangeDnsPtrRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServersIdActionsChangeDnsPtrRequestBody)
    ], PostServersIdActionsChangeDnsPtrRequest.prototype, "request", void 0);
    return PostServersIdActionsChangeDnsPtrRequest;
}(SpeakeasyBase));
export { PostServersIdActionsChangeDnsPtrRequest };
var PostServersIdActionsChangeDnsPtrResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeDnsPtrResponse, _super);
    function PostServersIdActionsChangeDnsPtrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsChangeDnsPtrActionResponse)
    ], PostServersIdActionsChangeDnsPtrResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeDnsPtrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeDnsPtrResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsChangeDnsPtrResponse;
}(SpeakeasyBase));
export { PostServersIdActionsChangeDnsPtrResponse };
