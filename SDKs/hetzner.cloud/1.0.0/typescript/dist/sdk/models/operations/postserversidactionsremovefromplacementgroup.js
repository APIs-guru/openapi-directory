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
var PostServersIdActionsRemoveFromPlacementGroupPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRemoveFromPlacementGroupPathParams, _super);
    function PostServersIdActionsRemoveFromPlacementGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRemoveFromPlacementGroupPathParams.prototype, "id", void 0);
    return PostServersIdActionsRemoveFromPlacementGroupPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsRemoveFromPlacementGroupPathParams };
// PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError, _super);
    function PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError };
var PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources, _super);
    function PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources };
export var PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum;
(function (PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum) {
    PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum || (PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum = {}));
var PostServersIdActionsRemoveFromPlacementGroupActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRemoveFromPlacementGroupActionResponseAction, _super);
    function PostServersIdActionsRemoveFromPlacementGroupActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsRemoveFromPlacementGroupActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsRemoveFromPlacementGroupActionResponseAction };
var PostServersIdActionsRemoveFromPlacementGroupActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRemoveFromPlacementGroupActionResponse, _super);
    function PostServersIdActionsRemoveFromPlacementGroupActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsRemoveFromPlacementGroupActionResponseAction)
    ], PostServersIdActionsRemoveFromPlacementGroupActionResponse.prototype, "action", void 0);
    return PostServersIdActionsRemoveFromPlacementGroupActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsRemoveFromPlacementGroupActionResponse };
var PostServersIdActionsRemoveFromPlacementGroupRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRemoveFromPlacementGroupRequest, _super);
    function PostServersIdActionsRemoveFromPlacementGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsRemoveFromPlacementGroupPathParams)
    ], PostServersIdActionsRemoveFromPlacementGroupRequest.prototype, "pathParams", void 0);
    return PostServersIdActionsRemoveFromPlacementGroupRequest;
}(SpeakeasyBase));
export { PostServersIdActionsRemoveFromPlacementGroupRequest };
var PostServersIdActionsRemoveFromPlacementGroupResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRemoveFromPlacementGroupResponse, _super);
    function PostServersIdActionsRemoveFromPlacementGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsRemoveFromPlacementGroupActionResponse)
    ], PostServersIdActionsRemoveFromPlacementGroupResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsRemoveFromPlacementGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsRemoveFromPlacementGroupResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsRemoveFromPlacementGroupResponse;
}(SpeakeasyBase));
export { PostServersIdActionsRemoveFromPlacementGroupResponse };
