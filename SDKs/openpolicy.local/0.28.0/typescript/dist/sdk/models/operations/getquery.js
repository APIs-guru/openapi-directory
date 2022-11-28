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
var GetQueryQueryParams = /** @class */ (function (_super) {
    __extends(GetQueryQueryParams, _super);
    function GetQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=explain" }),
        __metadata("design:type", String)
    ], GetQueryQueryParams.prototype, "explain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", Boolean)
    ], GetQueryQueryParams.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" }),
        __metadata("design:type", Boolean)
    ], GetQueryQueryParams.prototype, "pretty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetQueryQueryParams.prototype, "q", void 0);
    return GetQueryQueryParams;
}(SpeakeasyBase));
export { GetQueryQueryParams };
var GetQuery200ApplicationJsonExplanationLocalsKey = /** @class */ (function (_super) {
    __extends(GetQuery200ApplicationJsonExplanationLocalsKey, _super);
    function GetQuery200ApplicationJsonExplanationLocalsKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetQuery200ApplicationJsonExplanationLocalsKey.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetQuery200ApplicationJsonExplanationLocalsKey.prototype, "value", void 0);
    return GetQuery200ApplicationJsonExplanationLocalsKey;
}(SpeakeasyBase));
export { GetQuery200ApplicationJsonExplanationLocalsKey };
var GetQuery200ApplicationJsonExplanationLocalsValue = /** @class */ (function (_super) {
    __extends(GetQuery200ApplicationJsonExplanationLocalsValue, _super);
    function GetQuery200ApplicationJsonExplanationLocalsValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetQuery200ApplicationJsonExplanationLocalsValue.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetQuery200ApplicationJsonExplanationLocalsValue.prototype, "value", void 0);
    return GetQuery200ApplicationJsonExplanationLocalsValue;
}(SpeakeasyBase));
export { GetQuery200ApplicationJsonExplanationLocalsValue };
var GetQuery200ApplicationJsonExplanationLocals = /** @class */ (function (_super) {
    __extends(GetQuery200ApplicationJsonExplanationLocals, _super);
    function GetQuery200ApplicationJsonExplanationLocals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", GetQuery200ApplicationJsonExplanationLocalsKey)
    ], GetQuery200ApplicationJsonExplanationLocals.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", GetQuery200ApplicationJsonExplanationLocalsValue)
    ], GetQuery200ApplicationJsonExplanationLocals.prototype, "value", void 0);
    return GetQuery200ApplicationJsonExplanationLocals;
}(SpeakeasyBase));
export { GetQuery200ApplicationJsonExplanationLocals };
var GetQuery200ApplicationJsonExplanationNodeTerms = /** @class */ (function (_super) {
    __extends(GetQuery200ApplicationJsonExplanationNodeTerms, _super);
    function GetQuery200ApplicationJsonExplanationNodeTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetQuery200ApplicationJsonExplanationNodeTerms.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetQuery200ApplicationJsonExplanationNodeTerms.prototype, "value", void 0);
    return GetQuery200ApplicationJsonExplanationNodeTerms;
}(SpeakeasyBase));
export { GetQuery200ApplicationJsonExplanationNodeTerms };
// GetQuery200ApplicationJsonExplanationNode
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
var GetQuery200ApplicationJsonExplanationNode = /** @class */ (function (_super) {
    __extends(GetQuery200ApplicationJsonExplanationNode, _super);
    function GetQuery200ApplicationJsonExplanationNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonExplanationNode.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terms", elemType: GetQuery200ApplicationJsonExplanationNodeTerms }),
        __metadata("design:type", Array)
    ], GetQuery200ApplicationJsonExplanationNode.prototype, "terms", void 0);
    return GetQuery200ApplicationJsonExplanationNode;
}(SpeakeasyBase));
export { GetQuery200ApplicationJsonExplanationNode };
export var GetQuery200ApplicationJsonExplanationOpEnum;
(function (GetQuery200ApplicationJsonExplanationOpEnum) {
    GetQuery200ApplicationJsonExplanationOpEnum["Enter"] = "enter";
    GetQuery200ApplicationJsonExplanationOpEnum["Exit"] = "exit";
    GetQuery200ApplicationJsonExplanationOpEnum["Eval"] = "eval";
    GetQuery200ApplicationJsonExplanationOpEnum["Fail"] = "fail";
    GetQuery200ApplicationJsonExplanationOpEnum["Redo"] = "redo";
})(GetQuery200ApplicationJsonExplanationOpEnum || (GetQuery200ApplicationJsonExplanationOpEnum = {}));
export var GetQuery200ApplicationJsonExplanationTypeEnum;
(function (GetQuery200ApplicationJsonExplanationTypeEnum) {
    GetQuery200ApplicationJsonExplanationTypeEnum["Expr"] = "expr";
    GetQuery200ApplicationJsonExplanationTypeEnum["Rule"] = "rule";
    GetQuery200ApplicationJsonExplanationTypeEnum["Body"] = "body";
})(GetQuery200ApplicationJsonExplanationTypeEnum || (GetQuery200ApplicationJsonExplanationTypeEnum = {}));
var GetQuery200ApplicationJsonExplanation = /** @class */ (function (_super) {
    __extends(GetQuery200ApplicationJsonExplanation, _super);
    function GetQuery200ApplicationJsonExplanation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locals", elemType: GetQuery200ApplicationJsonExplanationLocals }),
        __metadata("design:type", Array)
    ], GetQuery200ApplicationJsonExplanation.prototype, "locals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node" }),
        __metadata("design:type", GetQuery200ApplicationJsonExplanationNode)
    ], GetQuery200ApplicationJsonExplanation.prototype, "node", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=op" }),
        __metadata("design:type", String)
    ], GetQuery200ApplicationJsonExplanation.prototype, "op", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_id" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonExplanation.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_id" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonExplanation.prototype, "queryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetQuery200ApplicationJsonExplanation.prototype, "type", void 0);
    return GetQuery200ApplicationJsonExplanation;
}(SpeakeasyBase));
export { GetQuery200ApplicationJsonExplanation };
var GetQuery200ApplicationJsonMetrics = /** @class */ (function (_super) {
    __extends(GetQuery200ApplicationJsonMetrics, _super);
    function GetQuery200ApplicationJsonMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=counter_server_query_cache_hit" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "counterServerQueryCacheHit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_build_comprehension_index_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageBuildComprehensionIndexNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_safety_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckSafetyNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_types_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckTypesNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_undefined_funcs_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUndefinedFuncsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_unsafe_builtins_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUnsafeBuiltinsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_resolve_refs_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageResolveRefsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_comprehension_terms_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteComprehensionTermsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_dynamic_terms_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteDynamicTermsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_expr_terms_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteExprTermsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_local_vars_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteLocalVarsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_to_capture_value_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteToCaptureValueNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_with_values_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteWithValuesNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_input_parse_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerRegoInputParseNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_module_compile_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerRegoModuleCompileNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_module_parse_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerRegoModuleParseNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_query_compile_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerRegoQueryCompileNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_query_eval_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerRegoQueryEvalNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_query_parse_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerRegoQueryParseNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_server_handler_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerServerHandlerNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_server_read_bytes_ns" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJsonMetrics.prototype, "timerServerReadBytesNs", void 0);
    return GetQuery200ApplicationJsonMetrics;
}(SpeakeasyBase));
export { GetQuery200ApplicationJsonMetrics };
var GetQuery200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQuery200ApplicationJson, _super);
    function GetQuery200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explanation", elemType: GetQuery200ApplicationJsonExplanation }),
        __metadata("design:type", Array)
    ], GetQuery200ApplicationJson.prototype, "explanation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", GetQuery200ApplicationJsonMetrics)
    ], GetQuery200ApplicationJson.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], GetQuery200ApplicationJson.prototype, "result", void 0);
    return GetQuery200ApplicationJson;
}(SpeakeasyBase));
export { GetQuery200ApplicationJson };
var GetQueryRequest = /** @class */ (function (_super) {
    __extends(GetQueryRequest, _super);
    function GetQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryQueryParams)
    ], GetQueryRequest.prototype, "queryParams", void 0);
    return GetQueryRequest;
}(SpeakeasyBase));
export { GetQueryRequest };
var GetQueryResponse = /** @class */ (function (_super) {
    __extends(GetQueryResponse, _super);
    function GetQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FourHundred)
    ], GetQueryResponse.prototype, "fourHundred", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQueryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuery200ApplicationJson)
    ], GetQueryResponse.prototype, "getQuery200ApplicationJsonObject", void 0);
    return GetQueryResponse;
}(SpeakeasyBase));
export { GetQueryResponse };
