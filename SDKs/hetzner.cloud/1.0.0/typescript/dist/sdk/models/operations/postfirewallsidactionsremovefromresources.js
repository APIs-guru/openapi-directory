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
var PostFirewallsIdActionsRemoveFromResourcesPathParams = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesPathParams, _super);
    function PostFirewallsIdActionsRemoveFromResourcesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsRemoveFromResourcesPathParams.prototype, "id", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesPathParams;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesPathParams };
// PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector
/**
 * Configuration for type label_selector, required if type is `label_selector`
**/
var PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector, _super);
    function PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector.prototype, "selector", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector };
// PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer
/**
 * Configuration for type server, required if type is `server`
**/
var PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer, _super);
    function PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer.prototype, "id", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer };
export var PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum;
(function (PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum) {
    PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum["Server"] = "server";
    PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum["LabelSelector"] = "label_selector";
})(PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum || (PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum = {}));
var PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources, _super);
    function PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_selector" }),
        __metadata("design:type", PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector)
    ], PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer)
    ], PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources.prototype, "type", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources };
var PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest, _super);
    function PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remove_from", elemType: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources }),
        __metadata("design:type", Array)
    ], PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest.prototype, "removeFrom", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest };
// PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError, _super);
    function PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError.prototype, "message", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError };
var PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources, _super);
    function PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources.prototype, "type", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources };
export var PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum;
(function (PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum) {
    PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum["Success"] = "success";
    PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum["Running"] = "running";
    PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum["Error"] = "error";
})(PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum || (PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum = {}));
var PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction, _super);
    function PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources }),
        __metadata("design:type", Array)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction.prototype, "status", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction };
var PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination, _super);
    function PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination.prototype, "totalEntries", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination };
var PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta, _super);
    function PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta.prototype, "pagination", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta };
var PostFirewallsIdActionsRemoveFromResourcesActionsResponse = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesActionsResponse, _super);
    function PostFirewallsIdActionsRemoveFromResourcesActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction }),
        __metadata("design:type", Array)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponse.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta)
    ], PostFirewallsIdActionsRemoveFromResourcesActionsResponse.prototype, "meta", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesActionsResponse;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesActionsResponse };
var PostFirewallsIdActionsRemoveFromResourcesRequest = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesRequest, _super);
    function PostFirewallsIdActionsRemoveFromResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFirewallsIdActionsRemoveFromResourcesPathParams)
    ], PostFirewallsIdActionsRemoveFromResourcesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest)
    ], PostFirewallsIdActionsRemoveFromResourcesRequest.prototype, "request", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesRequest;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesRequest };
var PostFirewallsIdActionsRemoveFromResourcesResponse = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsRemoveFromResourcesResponse, _super);
    function PostFirewallsIdActionsRemoveFromResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFirewallsIdActionsRemoveFromResourcesActionsResponse)
    ], PostFirewallsIdActionsRemoveFromResourcesResponse.prototype, "actionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsRemoveFromResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsRemoveFromResourcesResponse.prototype, "statusCode", void 0);
    return PostFirewallsIdActionsRemoveFromResourcesResponse;
}(SpeakeasyBase));
export { PostFirewallsIdActionsRemoveFromResourcesResponse };
