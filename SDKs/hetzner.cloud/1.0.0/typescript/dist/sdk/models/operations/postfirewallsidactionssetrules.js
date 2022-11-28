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
var PostFirewallsIdActionsSetRulesPathParams = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsSetRulesPathParams, _super);
    function PostFirewallsIdActionsSetRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsSetRulesPathParams.prototype, "id", void 0);
    return PostFirewallsIdActionsSetRulesPathParams;
}(SpeakeasyBase));
export { PostFirewallsIdActionsSetRulesPathParams };
export var PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum;
(function (PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum) {
    PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum["In"] = "in";
    PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum["Out"] = "out";
})(PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum || (PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum = {}));
export var PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum;
(function (PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum) {
    PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum["Tcp"] = "tcp";
    PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum["Udp"] = "udp";
    PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum["Icmp"] = "icmp";
    PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum["Esp"] = "esp";
    PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum["Gre"] = "gre";
})(PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum || (PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum = {}));
var PostFirewallsIdActionsSetRulesSetRulesRequestRule = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsSetRulesSetRulesRequestRule, _super);
    function PostFirewallsIdActionsSetRulesSetRulesRequestRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsSetRulesSetRulesRequestRule.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_ips" }),
        __metadata("design:type", Array)
    ], PostFirewallsIdActionsSetRulesSetRulesRequestRule.prototype, "destinationIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsSetRulesSetRulesRequestRule.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsSetRulesSetRulesRequestRule.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsSetRulesSetRulesRequestRule.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_ips" }),
        __metadata("design:type", Array)
    ], PostFirewallsIdActionsSetRulesSetRulesRequestRule.prototype, "sourceIps", void 0);
    return PostFirewallsIdActionsSetRulesSetRulesRequestRule;
}(SpeakeasyBase));
export { PostFirewallsIdActionsSetRulesSetRulesRequestRule };
var PostFirewallsIdActionsSetRulesSetRulesRequest = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsSetRulesSetRulesRequest, _super);
    function PostFirewallsIdActionsSetRulesSetRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: PostFirewallsIdActionsSetRulesSetRulesRequestRule }),
        __metadata("design:type", Array)
    ], PostFirewallsIdActionsSetRulesSetRulesRequest.prototype, "rules", void 0);
    return PostFirewallsIdActionsSetRulesSetRulesRequest;
}(SpeakeasyBase));
export { PostFirewallsIdActionsSetRulesSetRulesRequest };
// PostFirewallsIdActionsSetRulesActionsResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostFirewallsIdActionsSetRulesActionsResponseActionError = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsSetRulesActionsResponseActionError, _super);
    function PostFirewallsIdActionsSetRulesActionsResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsSetRulesActionsResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsSetRulesActionsResponseActionError.prototype, "message", void 0);
    return PostFirewallsIdActionsSetRulesActionsResponseActionError;
}(SpeakeasyBase));
export { PostFirewallsIdActionsSetRulesActionsResponseActionError };
var PostFirewallsIdActionsSetRulesActionsResponseActionResources = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsSetRulesActionsResponseActionResources, _super);
    function PostFirewallsIdActionsSetRulesActionsResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsSetRulesActionsResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsSetRulesActionsResponseActionResources.prototype, "type", void 0);
    return PostFirewallsIdActionsSetRulesActionsResponseActionResources;
}(SpeakeasyBase));
export { PostFirewallsIdActionsSetRulesActionsResponseActionResources };
export var PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum;
(function (PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum) {
    PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum["Success"] = "success";
    PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum["Running"] = "running";
    PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum["Error"] = "error";
})(PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum || (PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum = {}));
var PostFirewallsIdActionsSetRulesActionsResponseAction = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsSetRulesActionsResponseAction, _super);
    function PostFirewallsIdActionsSetRulesActionsResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsSetRulesActionsResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostFirewallsIdActionsSetRulesActionsResponseActionError)
    ], PostFirewallsIdActionsSetRulesActionsResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsSetRulesActionsResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsSetRulesActionsResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsSetRulesActionsResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFirewallsIdActionsSetRulesActionsResponseActionResources }),
        __metadata("design:type", Array)
    ], PostFirewallsIdActionsSetRulesActionsResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsSetRulesActionsResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsSetRulesActionsResponseAction.prototype, "status", void 0);
    return PostFirewallsIdActionsSetRulesActionsResponseAction;
}(SpeakeasyBase));
export { PostFirewallsIdActionsSetRulesActionsResponseAction };
var PostFirewallsIdActionsSetRulesActionsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsSetRulesActionsResponseMetaPagination, _super);
    function PostFirewallsIdActionsSetRulesActionsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsSetRulesActionsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsSetRulesActionsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsSetRulesActionsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsSetRulesActionsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsSetRulesActionsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsSetRulesActionsResponseMetaPagination.prototype, "totalEntries", void 0);
    return PostFirewallsIdActionsSetRulesActionsResponseMetaPagination;
}(SpeakeasyBase));
export { PostFirewallsIdActionsSetRulesActionsResponseMetaPagination };
var PostFirewallsIdActionsSetRulesActionsResponseMeta = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsSetRulesActionsResponseMeta, _super);
    function PostFirewallsIdActionsSetRulesActionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", PostFirewallsIdActionsSetRulesActionsResponseMetaPagination)
    ], PostFirewallsIdActionsSetRulesActionsResponseMeta.prototype, "pagination", void 0);
    return PostFirewallsIdActionsSetRulesActionsResponseMeta;
}(SpeakeasyBase));
export { PostFirewallsIdActionsSetRulesActionsResponseMeta };
var PostFirewallsIdActionsSetRulesActionsResponse = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsSetRulesActionsResponse, _super);
    function PostFirewallsIdActionsSetRulesActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: PostFirewallsIdActionsSetRulesActionsResponseAction }),
        __metadata("design:type", Array)
    ], PostFirewallsIdActionsSetRulesActionsResponse.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", PostFirewallsIdActionsSetRulesActionsResponseMeta)
    ], PostFirewallsIdActionsSetRulesActionsResponse.prototype, "meta", void 0);
    return PostFirewallsIdActionsSetRulesActionsResponse;
}(SpeakeasyBase));
export { PostFirewallsIdActionsSetRulesActionsResponse };
var PostFirewallsIdActionsSetRulesRequest = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsSetRulesRequest, _super);
    function PostFirewallsIdActionsSetRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFirewallsIdActionsSetRulesPathParams)
    ], PostFirewallsIdActionsSetRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostFirewallsIdActionsSetRulesSetRulesRequest)
    ], PostFirewallsIdActionsSetRulesRequest.prototype, "request", void 0);
    return PostFirewallsIdActionsSetRulesRequest;
}(SpeakeasyBase));
export { PostFirewallsIdActionsSetRulesRequest };
var PostFirewallsIdActionsSetRulesResponse = /** @class */ (function (_super) {
    __extends(PostFirewallsIdActionsSetRulesResponse, _super);
    function PostFirewallsIdActionsSetRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFirewallsIdActionsSetRulesActionsResponse)
    ], PostFirewallsIdActionsSetRulesResponse.prototype, "actionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFirewallsIdActionsSetRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFirewallsIdActionsSetRulesResponse.prototype, "statusCode", void 0);
    return PostFirewallsIdActionsSetRulesResponse;
}(SpeakeasyBase));
export { PostFirewallsIdActionsSetRulesResponse };
