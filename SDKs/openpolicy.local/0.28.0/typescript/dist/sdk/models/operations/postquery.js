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
import * as shared from "../shared";
var PostQueryQueryParams = /** @class */ (function (_super) {
    __extends(PostQueryQueryParams, _super);
    function PostQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=explain" }),
        __metadata("design:type", String)
    ], PostQueryQueryParams.prototype, "explain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", Boolean)
    ], PostQueryQueryParams.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" }),
        __metadata("design:type", Boolean)
    ], PostQueryQueryParams.prototype, "pretty", void 0);
    return PostQueryQueryParams;
}(SpeakeasyBase));
export { PostQueryQueryParams };
var PostQuery200ApplicationJsonExplanationLocalsKey = /** @class */ (function (_super) {
    __extends(PostQuery200ApplicationJsonExplanationLocalsKey, _super);
    function PostQuery200ApplicationJsonExplanationLocalsKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostQuery200ApplicationJsonExplanationLocalsKey.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PostQuery200ApplicationJsonExplanationLocalsKey.prototype, "value", void 0);
    return PostQuery200ApplicationJsonExplanationLocalsKey;
}(SpeakeasyBase));
export { PostQuery200ApplicationJsonExplanationLocalsKey };
var PostQuery200ApplicationJsonExplanationLocalsValue = /** @class */ (function (_super) {
    __extends(PostQuery200ApplicationJsonExplanationLocalsValue, _super);
    function PostQuery200ApplicationJsonExplanationLocalsValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostQuery200ApplicationJsonExplanationLocalsValue.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PostQuery200ApplicationJsonExplanationLocalsValue.prototype, "value", void 0);
    return PostQuery200ApplicationJsonExplanationLocalsValue;
}(SpeakeasyBase));
export { PostQuery200ApplicationJsonExplanationLocalsValue };
var PostQuery200ApplicationJsonExplanationLocals = /** @class */ (function (_super) {
    __extends(PostQuery200ApplicationJsonExplanationLocals, _super);
    function PostQuery200ApplicationJsonExplanationLocals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", PostQuery200ApplicationJsonExplanationLocalsKey)
    ], PostQuery200ApplicationJsonExplanationLocals.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", PostQuery200ApplicationJsonExplanationLocalsValue)
    ], PostQuery200ApplicationJsonExplanationLocals.prototype, "value", void 0);
    return PostQuery200ApplicationJsonExplanationLocals;
}(SpeakeasyBase));
export { PostQuery200ApplicationJsonExplanationLocals };
var PostQuery200ApplicationJsonExplanationNodeTerms = /** @class */ (function (_super) {
    __extends(PostQuery200ApplicationJsonExplanationNodeTerms, _super);
    function PostQuery200ApplicationJsonExplanationNodeTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostQuery200ApplicationJsonExplanationNodeTerms.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PostQuery200ApplicationJsonExplanationNodeTerms.prototype, "value", void 0);
    return PostQuery200ApplicationJsonExplanationNodeTerms;
}(SpeakeasyBase));
export { PostQuery200ApplicationJsonExplanationNodeTerms };
// PostQuery200ApplicationJsonExplanationNode
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
var PostQuery200ApplicationJsonExplanationNode = /** @class */ (function (_super) {
    __extends(PostQuery200ApplicationJsonExplanationNode, _super);
    function PostQuery200ApplicationJsonExplanationNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonExplanationNode.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terms", elemType: PostQuery200ApplicationJsonExplanationNodeTerms }),
        __metadata("design:type", Array)
    ], PostQuery200ApplicationJsonExplanationNode.prototype, "terms", void 0);
    return PostQuery200ApplicationJsonExplanationNode;
}(SpeakeasyBase));
export { PostQuery200ApplicationJsonExplanationNode };
export var PostQuery200ApplicationJsonExplanationOpEnum;
(function (PostQuery200ApplicationJsonExplanationOpEnum) {
    PostQuery200ApplicationJsonExplanationOpEnum["Enter"] = "enter";
    PostQuery200ApplicationJsonExplanationOpEnum["Exit"] = "exit";
    PostQuery200ApplicationJsonExplanationOpEnum["Eval"] = "eval";
    PostQuery200ApplicationJsonExplanationOpEnum["Fail"] = "fail";
    PostQuery200ApplicationJsonExplanationOpEnum["Redo"] = "redo";
})(PostQuery200ApplicationJsonExplanationOpEnum || (PostQuery200ApplicationJsonExplanationOpEnum = {}));
export var PostQuery200ApplicationJsonExplanationTypeEnum;
(function (PostQuery200ApplicationJsonExplanationTypeEnum) {
    PostQuery200ApplicationJsonExplanationTypeEnum["Expr"] = "expr";
    PostQuery200ApplicationJsonExplanationTypeEnum["Rule"] = "rule";
    PostQuery200ApplicationJsonExplanationTypeEnum["Body"] = "body";
})(PostQuery200ApplicationJsonExplanationTypeEnum || (PostQuery200ApplicationJsonExplanationTypeEnum = {}));
var PostQuery200ApplicationJsonExplanation = /** @class */ (function (_super) {
    __extends(PostQuery200ApplicationJsonExplanation, _super);
    function PostQuery200ApplicationJsonExplanation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locals", elemType: PostQuery200ApplicationJsonExplanationLocals }),
        __metadata("design:type", Array)
    ], PostQuery200ApplicationJsonExplanation.prototype, "locals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node" }),
        __metadata("design:type", PostQuery200ApplicationJsonExplanationNode)
    ], PostQuery200ApplicationJsonExplanation.prototype, "node", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=op" }),
        __metadata("design:type", String)
    ], PostQuery200ApplicationJsonExplanation.prototype, "op", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_id" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonExplanation.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_id" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonExplanation.prototype, "queryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostQuery200ApplicationJsonExplanation.prototype, "type", void 0);
    return PostQuery200ApplicationJsonExplanation;
}(SpeakeasyBase));
export { PostQuery200ApplicationJsonExplanation };
var PostQuery200ApplicationJsonMetrics = /** @class */ (function (_super) {
    __extends(PostQuery200ApplicationJsonMetrics, _super);
    function PostQuery200ApplicationJsonMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=counter_server_query_cache_hit" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "counterServerQueryCacheHit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_build_comprehension_index_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageBuildComprehensionIndexNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_safety_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckSafetyNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_types_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckTypesNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_undefined_funcs_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUndefinedFuncsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_unsafe_builtins_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUnsafeBuiltinsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_resolve_refs_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageResolveRefsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_comprehension_terms_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteComprehensionTermsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_dynamic_terms_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteDynamicTermsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_expr_terms_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteExprTermsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_local_vars_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteLocalVarsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_to_capture_value_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteToCaptureValueNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_with_values_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteWithValuesNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_input_parse_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerRegoInputParseNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_module_compile_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerRegoModuleCompileNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_module_parse_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerRegoModuleParseNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_query_compile_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerRegoQueryCompileNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_query_eval_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerRegoQueryEvalNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_query_parse_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerRegoQueryParseNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_server_handler_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerServerHandlerNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_server_read_bytes_ns" }),
        __metadata("design:type", Number)
    ], PostQuery200ApplicationJsonMetrics.prototype, "timerServerReadBytesNs", void 0);
    return PostQuery200ApplicationJsonMetrics;
}(SpeakeasyBase));
export { PostQuery200ApplicationJsonMetrics };
var PostQuery200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostQuery200ApplicationJson, _super);
    function PostQuery200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explanation", elemType: PostQuery200ApplicationJsonExplanation }),
        __metadata("design:type", Array)
    ], PostQuery200ApplicationJson.prototype, "explanation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", PostQuery200ApplicationJsonMetrics)
    ], PostQuery200ApplicationJson.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], PostQuery200ApplicationJson.prototype, "result", void 0);
    return PostQuery200ApplicationJson;
}(SpeakeasyBase));
export { PostQuery200ApplicationJson };
var PostQueryRequest = /** @class */ (function (_super) {
    __extends(PostQueryRequest, _super);
    function PostQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostQueryQueryParams)
    ], PostQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" }),
        __metadata("design:type", Uint8Array)
    ], PostQueryRequest.prototype, "request", void 0);
    return PostQueryRequest;
}(SpeakeasyBase));
export { PostQueryRequest };
var PostQueryResponse = /** @class */ (function (_super) {
    __extends(PostQueryResponse, _super);
    function PostQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FourHundred)
    ], PostQueryResponse.prototype, "fourHundred", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostQueryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostQuery200ApplicationJson)
    ], PostQueryResponse.prototype, "postQuery200ApplicationJsonObject", void 0);
    return PostQueryResponse;
}(SpeakeasyBase));
export { PostQueryResponse };
