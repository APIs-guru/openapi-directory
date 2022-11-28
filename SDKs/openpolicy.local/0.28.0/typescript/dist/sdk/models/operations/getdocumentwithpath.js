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
var GetDocumentWithPathPathParams = /** @class */ (function (_super) {
    __extends(GetDocumentWithPathPathParams, _super);
    function GetDocumentWithPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], GetDocumentWithPathPathParams.prototype, "path", void 0);
    return GetDocumentWithPathPathParams;
}(SpeakeasyBase));
export { GetDocumentWithPathPathParams };
var GetDocumentWithPathQueryParams = /** @class */ (function (_super) {
    __extends(GetDocumentWithPathQueryParams, _super);
    function GetDocumentWithPathQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=explain" }),
        __metadata("design:type", String)
    ], GetDocumentWithPathQueryParams.prototype, "explain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=instrument" }),
        __metadata("design:type", Boolean)
    ], GetDocumentWithPathQueryParams.prototype, "instrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", Boolean)
    ], GetDocumentWithPathQueryParams.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" }),
        __metadata("design:type", Boolean)
    ], GetDocumentWithPathQueryParams.prototype, "pretty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provenance" }),
        __metadata("design:type", Boolean)
    ], GetDocumentWithPathQueryParams.prototype, "provenance", void 0);
    return GetDocumentWithPathQueryParams;
}(SpeakeasyBase));
export { GetDocumentWithPathQueryParams };
var GetDocumentWithPath200ApplicationJsonExplanationLocalsKey = /** @class */ (function (_super) {
    __extends(GetDocumentWithPath200ApplicationJsonExplanationLocalsKey, _super);
    function GetDocumentWithPath200ApplicationJsonExplanationLocalsKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDocumentWithPath200ApplicationJsonExplanationLocalsKey.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetDocumentWithPath200ApplicationJsonExplanationLocalsKey.prototype, "value", void 0);
    return GetDocumentWithPath200ApplicationJsonExplanationLocalsKey;
}(SpeakeasyBase));
export { GetDocumentWithPath200ApplicationJsonExplanationLocalsKey };
var GetDocumentWithPath200ApplicationJsonExplanationLocalsValue = /** @class */ (function (_super) {
    __extends(GetDocumentWithPath200ApplicationJsonExplanationLocalsValue, _super);
    function GetDocumentWithPath200ApplicationJsonExplanationLocalsValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDocumentWithPath200ApplicationJsonExplanationLocalsValue.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetDocumentWithPath200ApplicationJsonExplanationLocalsValue.prototype, "value", void 0);
    return GetDocumentWithPath200ApplicationJsonExplanationLocalsValue;
}(SpeakeasyBase));
export { GetDocumentWithPath200ApplicationJsonExplanationLocalsValue };
var GetDocumentWithPath200ApplicationJsonExplanationLocals = /** @class */ (function (_super) {
    __extends(GetDocumentWithPath200ApplicationJsonExplanationLocals, _super);
    function GetDocumentWithPath200ApplicationJsonExplanationLocals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", GetDocumentWithPath200ApplicationJsonExplanationLocalsKey)
    ], GetDocumentWithPath200ApplicationJsonExplanationLocals.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", GetDocumentWithPath200ApplicationJsonExplanationLocalsValue)
    ], GetDocumentWithPath200ApplicationJsonExplanationLocals.prototype, "value", void 0);
    return GetDocumentWithPath200ApplicationJsonExplanationLocals;
}(SpeakeasyBase));
export { GetDocumentWithPath200ApplicationJsonExplanationLocals };
var GetDocumentWithPath200ApplicationJsonExplanationNodeTerms = /** @class */ (function (_super) {
    __extends(GetDocumentWithPath200ApplicationJsonExplanationNodeTerms, _super);
    function GetDocumentWithPath200ApplicationJsonExplanationNodeTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDocumentWithPath200ApplicationJsonExplanationNodeTerms.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetDocumentWithPath200ApplicationJsonExplanationNodeTerms.prototype, "value", void 0);
    return GetDocumentWithPath200ApplicationJsonExplanationNodeTerms;
}(SpeakeasyBase));
export { GetDocumentWithPath200ApplicationJsonExplanationNodeTerms };
// GetDocumentWithPath200ApplicationJsonExplanationNode
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
var GetDocumentWithPath200ApplicationJsonExplanationNode = /** @class */ (function (_super) {
    __extends(GetDocumentWithPath200ApplicationJsonExplanationNode, _super);
    function GetDocumentWithPath200ApplicationJsonExplanationNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonExplanationNode.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terms", elemType: GetDocumentWithPath200ApplicationJsonExplanationNodeTerms }),
        __metadata("design:type", Array)
    ], GetDocumentWithPath200ApplicationJsonExplanationNode.prototype, "terms", void 0);
    return GetDocumentWithPath200ApplicationJsonExplanationNode;
}(SpeakeasyBase));
export { GetDocumentWithPath200ApplicationJsonExplanationNode };
export var GetDocumentWithPath200ApplicationJsonExplanationOpEnum;
(function (GetDocumentWithPath200ApplicationJsonExplanationOpEnum) {
    GetDocumentWithPath200ApplicationJsonExplanationOpEnum["Enter"] = "enter";
    GetDocumentWithPath200ApplicationJsonExplanationOpEnum["Exit"] = "exit";
    GetDocumentWithPath200ApplicationJsonExplanationOpEnum["Eval"] = "eval";
    GetDocumentWithPath200ApplicationJsonExplanationOpEnum["Fail"] = "fail";
    GetDocumentWithPath200ApplicationJsonExplanationOpEnum["Redo"] = "redo";
})(GetDocumentWithPath200ApplicationJsonExplanationOpEnum || (GetDocumentWithPath200ApplicationJsonExplanationOpEnum = {}));
export var GetDocumentWithPath200ApplicationJsonExplanationTypeEnum;
(function (GetDocumentWithPath200ApplicationJsonExplanationTypeEnum) {
    GetDocumentWithPath200ApplicationJsonExplanationTypeEnum["Expr"] = "expr";
    GetDocumentWithPath200ApplicationJsonExplanationTypeEnum["Rule"] = "rule";
    GetDocumentWithPath200ApplicationJsonExplanationTypeEnum["Body"] = "body";
})(GetDocumentWithPath200ApplicationJsonExplanationTypeEnum || (GetDocumentWithPath200ApplicationJsonExplanationTypeEnum = {}));
var GetDocumentWithPath200ApplicationJsonExplanation = /** @class */ (function (_super) {
    __extends(GetDocumentWithPath200ApplicationJsonExplanation, _super);
    function GetDocumentWithPath200ApplicationJsonExplanation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locals", elemType: GetDocumentWithPath200ApplicationJsonExplanationLocals }),
        __metadata("design:type", Array)
    ], GetDocumentWithPath200ApplicationJsonExplanation.prototype, "locals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node" }),
        __metadata("design:type", GetDocumentWithPath200ApplicationJsonExplanationNode)
    ], GetDocumentWithPath200ApplicationJsonExplanation.prototype, "node", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=op" }),
        __metadata("design:type", String)
    ], GetDocumentWithPath200ApplicationJsonExplanation.prototype, "op", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_id" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonExplanation.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_id" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonExplanation.prototype, "queryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDocumentWithPath200ApplicationJsonExplanation.prototype, "type", void 0);
    return GetDocumentWithPath200ApplicationJsonExplanation;
}(SpeakeasyBase));
export { GetDocumentWithPath200ApplicationJsonExplanation };
var GetDocumentWithPath200ApplicationJsonMetrics = /** @class */ (function (_super) {
    __extends(GetDocumentWithPath200ApplicationJsonMetrics, _super);
    function GetDocumentWithPath200ApplicationJsonMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=counter_server_query_cache_hit" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "counterServerQueryCacheHit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_build_comprehension_index_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerQueryCompileStageBuildComprehensionIndexNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_safety_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckSafetyNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_types_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckTypesNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_undefined_funcs_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUndefinedFuncsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_unsafe_builtins_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUnsafeBuiltinsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_resolve_refs_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerQueryCompileStageResolveRefsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_comprehension_terms_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteComprehensionTermsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_dynamic_terms_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteDynamicTermsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_expr_terms_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteExprTermsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_local_vars_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteLocalVarsNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_to_capture_value_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteToCaptureValueNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_with_values_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteWithValuesNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_input_parse_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerRegoInputParseNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_module_compile_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerRegoModuleCompileNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_module_parse_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerRegoModuleParseNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_query_compile_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerRegoQueryCompileNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_query_eval_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerRegoQueryEvalNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_rego_query_parse_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerRegoQueryParseNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_server_handler_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerServerHandlerNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timer_server_read_bytes_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithPath200ApplicationJsonMetrics.prototype, "timerServerReadBytesNs", void 0);
    return GetDocumentWithPath200ApplicationJsonMetrics;
}(SpeakeasyBase));
export { GetDocumentWithPath200ApplicationJsonMetrics };
var GetDocumentWithPath200ApplicationJsonProvenance = /** @class */ (function (_super) {
    __extends(GetDocumentWithPath200ApplicationJsonProvenance, _super);
    function GetDocumentWithPath200ApplicationJsonProvenance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_commit" }),
        __metadata("design:type", String)
    ], GetDocumentWithPath200ApplicationJsonProvenance.prototype, "buildCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_hostname" }),
        __metadata("design:type", String)
    ], GetDocumentWithPath200ApplicationJsonProvenance.prototype, "buildHostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_timestamp" }),
        __metadata("design:type", String)
    ], GetDocumentWithPath200ApplicationJsonProvenance.prototype, "buildTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bundles" }),
        __metadata("design:type", Map)
    ], GetDocumentWithPath200ApplicationJsonProvenance.prototype, "bundles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], GetDocumentWithPath200ApplicationJsonProvenance.prototype, "version", void 0);
    return GetDocumentWithPath200ApplicationJsonProvenance;
}(SpeakeasyBase));
export { GetDocumentWithPath200ApplicationJsonProvenance };
var GetDocumentWithPath200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDocumentWithPath200ApplicationJson, _super);
    function GetDocumentWithPath200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explanation", elemType: GetDocumentWithPath200ApplicationJsonExplanation }),
        __metadata("design:type", Array)
    ], GetDocumentWithPath200ApplicationJson.prototype, "explanation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", GetDocumentWithPath200ApplicationJsonMetrics)
    ], GetDocumentWithPath200ApplicationJson.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provenance" }),
        __metadata("design:type", GetDocumentWithPath200ApplicationJsonProvenance)
    ], GetDocumentWithPath200ApplicationJson.prototype, "provenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], GetDocumentWithPath200ApplicationJson.prototype, "result", void 0);
    return GetDocumentWithPath200ApplicationJson;
}(SpeakeasyBase));
export { GetDocumentWithPath200ApplicationJson };
var GetDocumentWithPathRequest = /** @class */ (function (_super) {
    __extends(GetDocumentWithPathRequest, _super);
    function GetDocumentWithPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDocumentWithPathPathParams)
    ], GetDocumentWithPathRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDocumentWithPathQueryParams)
    ], GetDocumentWithPathRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" }),
        __metadata("design:type", Uint8Array)
    ], GetDocumentWithPathRequest.prototype, "request", void 0);
    return GetDocumentWithPathRequest;
}(SpeakeasyBase));
export { GetDocumentWithPathRequest };
var GetDocumentWithPathResponse = /** @class */ (function (_super) {
    __extends(GetDocumentWithPathResponse, _super);
    function GetDocumentWithPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FourHundred)
    ], GetDocumentWithPathResponse.prototype, "fourHundred", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDocumentWithPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDocumentWithPathResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDocumentWithPath200ApplicationJson)
    ], GetDocumentWithPathResponse.prototype, "getDocumentWithPath200ApplicationJsonObject", void 0);
    return GetDocumentWithPathResponse;
}(SpeakeasyBase));
export { GetDocumentWithPathResponse };
