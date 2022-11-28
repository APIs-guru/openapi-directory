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
var PostCompileQueryParams = /** @class */ (function (_super) {
    __extends(PostCompileQueryParams, _super);
    function PostCompileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=explain" }),
        __metadata("design:type", String)
    ], PostCompileQueryParams.prototype, "explain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=instrument" }),
        __metadata("design:type", Boolean)
    ], PostCompileQueryParams.prototype, "instrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", Boolean)
    ], PostCompileQueryParams.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" }),
        __metadata("design:type", Boolean)
    ], PostCompileQueryParams.prototype, "pretty", void 0);
    return PostCompileQueryParams;
}(SpeakeasyBase));
export { PostCompileQueryParams };
var PostCompile200ApplicationJsonExplanationLocalsKey = /** @class */ (function (_super) {
    __extends(PostCompile200ApplicationJsonExplanationLocalsKey, _super);
    function PostCompile200ApplicationJsonExplanationLocalsKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostCompile200ApplicationJsonExplanationLocalsKey.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PostCompile200ApplicationJsonExplanationLocalsKey.prototype, "value", void 0);
    return PostCompile200ApplicationJsonExplanationLocalsKey;
}(SpeakeasyBase));
export { PostCompile200ApplicationJsonExplanationLocalsKey };
var PostCompile200ApplicationJsonExplanationLocalsValue = /** @class */ (function (_super) {
    __extends(PostCompile200ApplicationJsonExplanationLocalsValue, _super);
    function PostCompile200ApplicationJsonExplanationLocalsValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostCompile200ApplicationJsonExplanationLocalsValue.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PostCompile200ApplicationJsonExplanationLocalsValue.prototype, "value", void 0);
    return PostCompile200ApplicationJsonExplanationLocalsValue;
}(SpeakeasyBase));
export { PostCompile200ApplicationJsonExplanationLocalsValue };
var PostCompile200ApplicationJsonExplanationLocals = /** @class */ (function (_super) {
    __extends(PostCompile200ApplicationJsonExplanationLocals, _super);
    function PostCompile200ApplicationJsonExplanationLocals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", PostCompile200ApplicationJsonExplanationLocalsKey)
    ], PostCompile200ApplicationJsonExplanationLocals.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", PostCompile200ApplicationJsonExplanationLocalsValue)
    ], PostCompile200ApplicationJsonExplanationLocals.prototype, "value", void 0);
    return PostCompile200ApplicationJsonExplanationLocals;
}(SpeakeasyBase));
export { PostCompile200ApplicationJsonExplanationLocals };
var PostCompile200ApplicationJsonExplanationNodeTerms = /** @class */ (function (_super) {
    __extends(PostCompile200ApplicationJsonExplanationNodeTerms, _super);
    function PostCompile200ApplicationJsonExplanationNodeTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostCompile200ApplicationJsonExplanationNodeTerms.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PostCompile200ApplicationJsonExplanationNodeTerms.prototype, "value", void 0);
    return PostCompile200ApplicationJsonExplanationNodeTerms;
}(SpeakeasyBase));
export { PostCompile200ApplicationJsonExplanationNodeTerms };
// PostCompile200ApplicationJsonExplanationNode
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
var PostCompile200ApplicationJsonExplanationNode = /** @class */ (function (_super) {
    __extends(PostCompile200ApplicationJsonExplanationNode, _super);
    function PostCompile200ApplicationJsonExplanationNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonExplanationNode.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terms", elemType: PostCompile200ApplicationJsonExplanationNodeTerms }),
        __metadata("design:type", Array)
    ], PostCompile200ApplicationJsonExplanationNode.prototype, "terms", void 0);
    return PostCompile200ApplicationJsonExplanationNode;
}(SpeakeasyBase));
export { PostCompile200ApplicationJsonExplanationNode };
export var PostCompile200ApplicationJsonExplanationOpEnum;
(function (PostCompile200ApplicationJsonExplanationOpEnum) {
    PostCompile200ApplicationJsonExplanationOpEnum["Enter"] = "enter";
    PostCompile200ApplicationJsonExplanationOpEnum["Exit"] = "exit";
    PostCompile200ApplicationJsonExplanationOpEnum["Eval"] = "eval";
    PostCompile200ApplicationJsonExplanationOpEnum["Fail"] = "fail";
    PostCompile200ApplicationJsonExplanationOpEnum["Redo"] = "redo";
})(PostCompile200ApplicationJsonExplanationOpEnum || (PostCompile200ApplicationJsonExplanationOpEnum = {}));
export var PostCompile200ApplicationJsonExplanationTypeEnum;
(function (PostCompile200ApplicationJsonExplanationTypeEnum) {
    PostCompile200ApplicationJsonExplanationTypeEnum["Expr"] = "expr";
    PostCompile200ApplicationJsonExplanationTypeEnum["Rule"] = "rule";
    PostCompile200ApplicationJsonExplanationTypeEnum["Body"] = "body";
})(PostCompile200ApplicationJsonExplanationTypeEnum || (PostCompile200ApplicationJsonExplanationTypeEnum = {}));
var PostCompile200ApplicationJsonExplanation = /** @class */ (function (_super) {
    __extends(PostCompile200ApplicationJsonExplanation, _super);
    function PostCompile200ApplicationJsonExplanation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locals", elemType: PostCompile200ApplicationJsonExplanationLocals }),
        __metadata("design:type", Array)
    ], PostCompile200ApplicationJsonExplanation.prototype, "locals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node" }),
        __metadata("design:type", PostCompile200ApplicationJsonExplanationNode)
    ], PostCompile200ApplicationJsonExplanation.prototype, "node", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=op" }),
        __metadata("design:type", String)
    ], PostCompile200ApplicationJsonExplanation.prototype, "op", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_id" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonExplanation.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_id" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonExplanation.prototype, "queryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostCompile200ApplicationJsonExplanation.prototype, "type", void 0);
    return PostCompile200ApplicationJsonExplanation;
}(SpeakeasyBase));
export { PostCompile200ApplicationJsonExplanation };
var PostCompile200ApplicationJsonMetrics = /** @class */ (function (_super) {
    __extends(PostCompile200ApplicationJsonMetrics, _super);
    function PostCompile200ApplicationJsonMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=counter_server_query_cache_hit" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "counterServerQueryCacheHit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_build_comprehension_index_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerQueryCompileStageBuildComprehensionIndexNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_safety_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckSafetyNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_types_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckTypesNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_undefined_funcs_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUndefinedFuncsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_unsafe_builtins_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUnsafeBuiltinsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_resolve_refs_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerQueryCompileStageResolveRefsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_comprehension_terms_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteComprehensionTermsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_dynamic_terms_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteDynamicTermsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_expr_terms_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteExprTermsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_local_vars_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteLocalVarsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_to_capture_value_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteToCaptureValueNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_with_values_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteWithValuesNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_input_parse_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerRegoInputParseNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_module_compile_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerRegoModuleCompileNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_module_parse_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerRegoModuleParseNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_query_compile_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerRegoQueryCompileNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_query_eval_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerRegoQueryEvalNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_query_parse_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerRegoQueryParseNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_server_handler_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerServerHandlerNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_server_read_bytes_ns" }),
        __metadata("design:type", Number)
    ], PostCompile200ApplicationJsonMetrics.prototype, "timerServerReadBytesNs", void 0);
    return PostCompile200ApplicationJsonMetrics;
}(SpeakeasyBase));
export { PostCompile200ApplicationJsonMetrics };
var PostCompile200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostCompile200ApplicationJson, _super);
    function PostCompile200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explanation", elemType: PostCompile200ApplicationJsonExplanation }),
        __metadata("design:type", Array)
    ], PostCompile200ApplicationJson.prototype, "explanation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", PostCompile200ApplicationJsonMetrics)
    ], PostCompile200ApplicationJson.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], PostCompile200ApplicationJson.prototype, "result", void 0);
    return PostCompile200ApplicationJson;
}(SpeakeasyBase));
export { PostCompile200ApplicationJson };
var PostCompileRequest = /** @class */ (function (_super) {
    __extends(PostCompileRequest, _super);
    function PostCompileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCompileQueryParams)
    ], PostCompileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PostCompileRequest.prototype, "request", void 0);
    return PostCompileRequest;
}(SpeakeasyBase));
export { PostCompileRequest };
var PostCompileResponse = /** @class */ (function (_super) {
    __extends(PostCompileResponse, _super);
    function PostCompileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FourHundred)
    ], PostCompileResponse.prototype, "fourHundred", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCompileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCompileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCompile200ApplicationJson)
    ], PostCompileResponse.prototype, "postCompile200ApplicationJsonObject", void 0);
    return PostCompileResponse;
}(SpeakeasyBase));
export { PostCompileResponse };
