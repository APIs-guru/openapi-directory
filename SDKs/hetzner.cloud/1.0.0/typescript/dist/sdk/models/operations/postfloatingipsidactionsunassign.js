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
var PostFloatingIpsIdActionsUnassignPathParams = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsUnassignPathParams, _super);
    function PostFloatingIpsIdActionsUnassignPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsUnassignPathParams.prototype, "id", void 0);
    return PostFloatingIpsIdActionsUnassignPathParams;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsUnassignPathParams };
// PostFloatingIpsIdActionsUnassignActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostFloatingIpsIdActionsUnassignActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsUnassignActionResponseActionError, _super);
    function PostFloatingIpsIdActionsUnassignActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsUnassignActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsUnassignActionResponseActionError.prototype, "message", void 0);
    return PostFloatingIpsIdActionsUnassignActionResponseActionError;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsUnassignActionResponseActionError };
var PostFloatingIpsIdActionsUnassignActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsUnassignActionResponseActionResources, _super);
    function PostFloatingIpsIdActionsUnassignActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsUnassignActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsUnassignActionResponseActionResources.prototype, "type", void 0);
    return PostFloatingIpsIdActionsUnassignActionResponseActionResources;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsUnassignActionResponseActionResources };
export var PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum;
(function (PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum) {
    PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum["Success"] = "success";
    PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum["Running"] = "running";
    PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum["Error"] = "error";
})(PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum || (PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum = {}));
var PostFloatingIpsIdActionsUnassignActionResponseAction = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsUnassignActionResponseAction, _super);
    function PostFloatingIpsIdActionsUnassignActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsUnassignActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostFloatingIpsIdActionsUnassignActionResponseActionError)
    ], PostFloatingIpsIdActionsUnassignActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsUnassignActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsUnassignActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsUnassignActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFloatingIpsIdActionsUnassignActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostFloatingIpsIdActionsUnassignActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsUnassignActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsUnassignActionResponseAction.prototype, "status", void 0);
    return PostFloatingIpsIdActionsUnassignActionResponseAction;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsUnassignActionResponseAction };
var PostFloatingIpsIdActionsUnassignActionResponse = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsUnassignActionResponse, _super);
    function PostFloatingIpsIdActionsUnassignActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostFloatingIpsIdActionsUnassignActionResponseAction)
    ], PostFloatingIpsIdActionsUnassignActionResponse.prototype, "action", void 0);
    return PostFloatingIpsIdActionsUnassignActionResponse;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsUnassignActionResponse };
var PostFloatingIpsIdActionsUnassignRequest = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsUnassignRequest, _super);
    function PostFloatingIpsIdActionsUnassignRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFloatingIpsIdActionsUnassignPathParams)
    ], PostFloatingIpsIdActionsUnassignRequest.prototype, "pathParams", void 0);
    return PostFloatingIpsIdActionsUnassignRequest;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsUnassignRequest };
var PostFloatingIpsIdActionsUnassignResponse = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsUnassignResponse, _super);
    function PostFloatingIpsIdActionsUnassignResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFloatingIpsIdActionsUnassignActionResponse)
    ], PostFloatingIpsIdActionsUnassignResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsUnassignResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsUnassignResponse.prototype, "statusCode", void 0);
    return PostFloatingIpsIdActionsUnassignResponse;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsUnassignResponse };
