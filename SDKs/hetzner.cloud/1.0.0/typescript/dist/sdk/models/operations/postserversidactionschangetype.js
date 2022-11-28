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
var PostServersIdActionsChangeTypePathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeTypePathParams, _super);
    function PostServersIdActionsChangeTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeTypePathParams.prototype, "id", void 0);
    return PostServersIdActionsChangeTypePathParams;
}(SpeakeasyBase));
export { PostServersIdActionsChangeTypePathParams };
var PostServersIdActionsChangeTypeRequestBody = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeTypeRequestBody, _super);
    function PostServersIdActionsChangeTypeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeTypeRequestBody.prototype, "serverType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upgrade_disk" }),
        __metadata("design:type", Boolean)
    ], PostServersIdActionsChangeTypeRequestBody.prototype, "upgradeDisk", void 0);
    return PostServersIdActionsChangeTypeRequestBody;
}(SpeakeasyBase));
export { PostServersIdActionsChangeTypeRequestBody };
// PostServersIdActionsChangeTypeActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsChangeTypeActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeTypeActionResponseActionError, _super);
    function PostServersIdActionsChangeTypeActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeTypeActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeTypeActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsChangeTypeActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsChangeTypeActionResponseActionError };
var PostServersIdActionsChangeTypeActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeTypeActionResponseActionResources, _super);
    function PostServersIdActionsChangeTypeActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeTypeActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeTypeActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsChangeTypeActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsChangeTypeActionResponseActionResources };
export var PostServersIdActionsChangeTypeActionResponseActionStatusEnum;
(function (PostServersIdActionsChangeTypeActionResponseActionStatusEnum) {
    PostServersIdActionsChangeTypeActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsChangeTypeActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsChangeTypeActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsChangeTypeActionResponseActionStatusEnum || (PostServersIdActionsChangeTypeActionResponseActionStatusEnum = {}));
var PostServersIdActionsChangeTypeActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeTypeActionResponseAction, _super);
    function PostServersIdActionsChangeTypeActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeTypeActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsChangeTypeActionResponseActionError)
    ], PostServersIdActionsChangeTypeActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeTypeActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeTypeActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeTypeActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsChangeTypeActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsChangeTypeActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeTypeActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeTypeActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsChangeTypeActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsChangeTypeActionResponseAction };
var PostServersIdActionsChangeTypeActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeTypeActionResponse, _super);
    function PostServersIdActionsChangeTypeActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsChangeTypeActionResponseAction)
    ], PostServersIdActionsChangeTypeActionResponse.prototype, "action", void 0);
    return PostServersIdActionsChangeTypeActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsChangeTypeActionResponse };
var PostServersIdActionsChangeTypeRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeTypeRequest, _super);
    function PostServersIdActionsChangeTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsChangeTypePathParams)
    ], PostServersIdActionsChangeTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServersIdActionsChangeTypeRequestBody)
    ], PostServersIdActionsChangeTypeRequest.prototype, "request", void 0);
    return PostServersIdActionsChangeTypeRequest;
}(SpeakeasyBase));
export { PostServersIdActionsChangeTypeRequest };
var PostServersIdActionsChangeTypeResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeTypeResponse, _super);
    function PostServersIdActionsChangeTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsChangeTypeActionResponse)
    ], PostServersIdActionsChangeTypeResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeTypeResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsChangeTypeResponse;
}(SpeakeasyBase));
export { PostServersIdActionsChangeTypeResponse };
