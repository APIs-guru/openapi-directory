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
export var PostPlacementGroupsCreatePlacementGroupRequestTypeEnum;
(function (PostPlacementGroupsCreatePlacementGroupRequestTypeEnum) {
    PostPlacementGroupsCreatePlacementGroupRequestTypeEnum["Spread"] = "spread";
})(PostPlacementGroupsCreatePlacementGroupRequestTypeEnum || (PostPlacementGroupsCreatePlacementGroupRequestTypeEnum = {}));
var PostPlacementGroupsCreatePlacementGroupRequest = /** @class */ (function (_super) {
    __extends(PostPlacementGroupsCreatePlacementGroupRequest, _super);
    function PostPlacementGroupsCreatePlacementGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostPlacementGroupsCreatePlacementGroupRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostPlacementGroupsCreatePlacementGroupRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostPlacementGroupsCreatePlacementGroupRequest.prototype, "type", void 0);
    return PostPlacementGroupsCreatePlacementGroupRequest;
}(SpeakeasyBase));
export { PostPlacementGroupsCreatePlacementGroupRequest };
// PostPlacementGroupsCreatePlacementGroupResponseNullableActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostPlacementGroupsCreatePlacementGroupResponseNullableActionError = /** @class */ (function (_super) {
    __extends(PostPlacementGroupsCreatePlacementGroupResponseNullableActionError, _super);
    function PostPlacementGroupsCreatePlacementGroupResponseNullableActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostPlacementGroupsCreatePlacementGroupResponseNullableActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostPlacementGroupsCreatePlacementGroupResponseNullableActionError.prototype, "message", void 0);
    return PostPlacementGroupsCreatePlacementGroupResponseNullableActionError;
}(SpeakeasyBase));
export { PostPlacementGroupsCreatePlacementGroupResponseNullableActionError };
var PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources = /** @class */ (function (_super) {
    __extends(PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources, _super);
    function PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources.prototype, "type", void 0);
    return PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources;
}(SpeakeasyBase));
export { PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources };
export var PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum;
(function (PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum) {
    PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum["Success"] = "success";
    PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum["Running"] = "running";
    PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum["Error"] = "error";
})(PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum || (PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum = {}));
var PostPlacementGroupsCreatePlacementGroupResponseNullableAction = /** @class */ (function (_super) {
    __extends(PostPlacementGroupsCreatePlacementGroupResponseNullableAction, _super);
    function PostPlacementGroupsCreatePlacementGroupResponseNullableAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostPlacementGroupsCreatePlacementGroupResponseNullableAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostPlacementGroupsCreatePlacementGroupResponseNullableActionError)
    ], PostPlacementGroupsCreatePlacementGroupResponseNullableAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostPlacementGroupsCreatePlacementGroupResponseNullableAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostPlacementGroupsCreatePlacementGroupResponseNullableAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostPlacementGroupsCreatePlacementGroupResponseNullableAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources }),
        __metadata("design:type", Array)
    ], PostPlacementGroupsCreatePlacementGroupResponseNullableAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostPlacementGroupsCreatePlacementGroupResponseNullableAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostPlacementGroupsCreatePlacementGroupResponseNullableAction.prototype, "status", void 0);
    return PostPlacementGroupsCreatePlacementGroupResponseNullableAction;
}(SpeakeasyBase));
export { PostPlacementGroupsCreatePlacementGroupResponseNullableAction };
export var PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum;
(function (PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum) {
    PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum["Spread"] = "spread";
})(PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum || (PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum = {}));
var PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup = /** @class */ (function (_super) {
    __extends(PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup, _super);
    function PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servers" }),
        __metadata("design:type", Array)
    ], PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup.prototype, "servers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup.prototype, "type", void 0);
    return PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup;
}(SpeakeasyBase));
export { PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup };
var PostPlacementGroupsCreatePlacementGroupResponse = /** @class */ (function (_super) {
    __extends(PostPlacementGroupsCreatePlacementGroupResponse, _super);
    function PostPlacementGroupsCreatePlacementGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostPlacementGroupsCreatePlacementGroupResponseNullableAction)
    ], PostPlacementGroupsCreatePlacementGroupResponse.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placement_group" }),
        __metadata("design:type", PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup)
    ], PostPlacementGroupsCreatePlacementGroupResponse.prototype, "placementGroup", void 0);
    return PostPlacementGroupsCreatePlacementGroupResponse;
}(SpeakeasyBase));
export { PostPlacementGroupsCreatePlacementGroupResponse };
var PostPlacementGroupsRequest = /** @class */ (function (_super) {
    __extends(PostPlacementGroupsRequest, _super);
    function PostPlacementGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPlacementGroupsCreatePlacementGroupRequest)
    ], PostPlacementGroupsRequest.prototype, "request", void 0);
    return PostPlacementGroupsRequest;
}(SpeakeasyBase));
export { PostPlacementGroupsRequest };
var PostPlacementGroupsResponse = /** @class */ (function (_super) {
    __extends(PostPlacementGroupsResponse, _super);
    function PostPlacementGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPlacementGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPlacementGroupsCreatePlacementGroupResponse)
    ], PostPlacementGroupsResponse.prototype, "createPlacementGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPlacementGroupsResponse.prototype, "statusCode", void 0);
    return PostPlacementGroupsResponse;
}(SpeakeasyBase));
export { PostPlacementGroupsResponse };
