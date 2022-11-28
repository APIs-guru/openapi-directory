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
var PostFloatingIpsIdActionsAssignPathParams = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsAssignPathParams, _super);
    function PostFloatingIpsIdActionsAssignPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsAssignPathParams.prototype, "id", void 0);
    return PostFloatingIpsIdActionsAssignPathParams;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsAssignPathParams };
var PostFloatingIpsIdActionsAssignAssignFloatingIpRequest = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsAssignAssignFloatingIpRequest, _super);
    function PostFloatingIpsIdActionsAssignAssignFloatingIpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsAssignAssignFloatingIpRequest.prototype, "server", void 0);
    return PostFloatingIpsIdActionsAssignAssignFloatingIpRequest;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsAssignAssignFloatingIpRequest };
// PostFloatingIpsIdActionsAssignActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostFloatingIpsIdActionsAssignActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsAssignActionResponseActionError, _super);
    function PostFloatingIpsIdActionsAssignActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsAssignActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsAssignActionResponseActionError.prototype, "message", void 0);
    return PostFloatingIpsIdActionsAssignActionResponseActionError;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsAssignActionResponseActionError };
var PostFloatingIpsIdActionsAssignActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsAssignActionResponseActionResources, _super);
    function PostFloatingIpsIdActionsAssignActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsAssignActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsAssignActionResponseActionResources.prototype, "type", void 0);
    return PostFloatingIpsIdActionsAssignActionResponseActionResources;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsAssignActionResponseActionResources };
export var PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum;
(function (PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum) {
    PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum["Success"] = "success";
    PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum["Running"] = "running";
    PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum["Error"] = "error";
})(PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum || (PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum = {}));
var PostFloatingIpsIdActionsAssignActionResponseAction = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsAssignActionResponseAction, _super);
    function PostFloatingIpsIdActionsAssignActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsAssignActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostFloatingIpsIdActionsAssignActionResponseActionError)
    ], PostFloatingIpsIdActionsAssignActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsAssignActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsAssignActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsAssignActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFloatingIpsIdActionsAssignActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostFloatingIpsIdActionsAssignActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsAssignActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsAssignActionResponseAction.prototype, "status", void 0);
    return PostFloatingIpsIdActionsAssignActionResponseAction;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsAssignActionResponseAction };
var PostFloatingIpsIdActionsAssignActionResponse = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsAssignActionResponse, _super);
    function PostFloatingIpsIdActionsAssignActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostFloatingIpsIdActionsAssignActionResponseAction)
    ], PostFloatingIpsIdActionsAssignActionResponse.prototype, "action", void 0);
    return PostFloatingIpsIdActionsAssignActionResponse;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsAssignActionResponse };
var PostFloatingIpsIdActionsAssignRequest = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsAssignRequest, _super);
    function PostFloatingIpsIdActionsAssignRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFloatingIpsIdActionsAssignPathParams)
    ], PostFloatingIpsIdActionsAssignRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostFloatingIpsIdActionsAssignAssignFloatingIpRequest)
    ], PostFloatingIpsIdActionsAssignRequest.prototype, "request", void 0);
    return PostFloatingIpsIdActionsAssignRequest;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsAssignRequest };
var PostFloatingIpsIdActionsAssignResponse = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsAssignResponse, _super);
    function PostFloatingIpsIdActionsAssignResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFloatingIpsIdActionsAssignActionResponse)
    ], PostFloatingIpsIdActionsAssignResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsAssignResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsAssignResponse.prototype, "statusCode", void 0);
    return PostFloatingIpsIdActionsAssignResponse;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsAssignResponse };
