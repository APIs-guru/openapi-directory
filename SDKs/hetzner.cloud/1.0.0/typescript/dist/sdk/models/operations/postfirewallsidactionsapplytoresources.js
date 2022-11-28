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
var PostFirewallsIdActionsApplyToResourcesPathParams = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesPathParams, _super);
    function PostFirewallsIdActionsApplyToResourcesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsApplyToResourcesPathParams.prototype, "id", void 0);
    return PostFirewallsIdActionsApplyToResourcesPathParams;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesPathParams };
// PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector
/**
 * Configuration for type label_selector, required if type is `label_selector`
**/
var PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector, _super);
    function PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector.prototype, "selector", void 0);
    return PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector };
// PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer
/**
 * Configuration for type server, required if type is `server`
**/
var PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer, _super);
    function PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer.prototype, "id", void 0);
    return PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer };
export var PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum;
(function (PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum) {
    PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum["Server"] = "server";
    PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum["LabelSelector"] = "label_selector";
})(PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum || (PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum = {}));
var PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources, _super);
    function PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_selector" }),
        __metadata("design:type", PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector)
    ], PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer)
    ], PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources.prototype, "type", void 0);
    return PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources };
var PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest, _super);
    function PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apply_to", elemType: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources }),
        __metadata("design:type", Array)
    ], PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest.prototype, "applyTo", void 0);
    return PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest };
// PostFirewallsIdActionsApplyToResourcesActionsResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostFirewallsIdActionsApplyToResourcesActionsResponseActionError = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesActionsResponseActionError, _super);
    function PostFirewallsIdActionsApplyToResourcesActionsResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseActionError.prototype, "message", void 0);
    return PostFirewallsIdActionsApplyToResourcesActionsResponseActionError;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesActionsResponseActionError };
var PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources, _super);
    function PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources.prototype, "type", void 0);
    return PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources };
export var PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum;
(function (PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum) {
    PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum["Success"] = "success";
    PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum["Running"] = "running";
    PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum["Error"] = "error";
})(PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum || (PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum = {}));
var PostFirewallsIdActionsApplyToResourcesActionsResponseAction = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesActionsResponseAction, _super);
    function PostFirewallsIdActionsApplyToResourcesActionsResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostFirewallsIdActionsApplyToResourcesActionsResponseActionError)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources }),
        __metadata("design:type", Array)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseAction.prototype, "status", void 0);
    return PostFirewallsIdActionsApplyToResourcesActionsResponseAction;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesActionsResponseAction };
var PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination, _super);
    function PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination.prototype, "totalEntries", void 0);
    return PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination };
var PostFirewallsIdActionsApplyToResourcesActionsResponseMeta = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesActionsResponseMeta, _super);
    function PostFirewallsIdActionsApplyToResourcesActionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponseMeta.prototype, "pagination", void 0);
    return PostFirewallsIdActionsApplyToResourcesActionsResponseMeta;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesActionsResponseMeta };
var PostFirewallsIdActionsApplyToResourcesActionsResponse = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesActionsResponse, _super);
    function PostFirewallsIdActionsApplyToResourcesActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: PostFirewallsIdActionsApplyToResourcesActionsResponseAction }),
        __metadata("design:type", Array)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponse.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", PostFirewallsIdActionsApplyToResourcesActionsResponseMeta)
    ], PostFirewallsIdActionsApplyToResourcesActionsResponse.prototype, "meta", void 0);
    return PostFirewallsIdActionsApplyToResourcesActionsResponse;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesActionsResponse };
var PostFirewallsIdActionsApplyToResourcesRequest = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesRequest, _super);
    function PostFirewallsIdActionsApplyToResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFirewallsIdActionsApplyToResourcesPathParams)
    ], PostFirewallsIdActionsApplyToResourcesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest)
    ], PostFirewallsIdActionsApplyToResourcesRequest.prototype, "request", void 0);
    return PostFirewallsIdActionsApplyToResourcesRequest;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesRequest };
var PostFirewallsIdActionsApplyToResourcesResponse = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsApplyToResourcesResponse, _super);
    function PostFirewallsIdActionsApplyToResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFirewallsIdActionsApplyToResourcesActionsResponse)
    ], PostFirewallsIdActionsApplyToResourcesResponse.prototype, "actionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsApplyToResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsApplyToResourcesResponse.prototype, "statusCode", void 0);
    return PostFirewallsIdActionsApplyToResourcesResponse;
}(SpeakeasyBase));
export { PostFirewallsIdActionsApplyToResourcesResponse };
