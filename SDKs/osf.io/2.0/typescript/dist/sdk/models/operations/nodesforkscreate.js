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
var NodesForksCreatePathParams = /** @class */ (function (_super) {
    __extends(NodesForksCreatePathParams, _super);
    function NodesForksCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", String)
    ], NodesForksCreatePathParams.prototype, "nodeId", void 0);
    return NodesForksCreatePathParams;
}(SpeakeasyBase));
export { NodesForksCreatePathParams };
export var NodesForksCreateNodeAttributesCategoryEnum;
(function (NodesForksCreateNodeAttributesCategoryEnum) {
    NodesForksCreateNodeAttributesCategoryEnum["Analysis"] = "analysis";
    NodesForksCreateNodeAttributesCategoryEnum["Communication"] = "communication";
    NodesForksCreateNodeAttributesCategoryEnum["Data"] = "data";
    NodesForksCreateNodeAttributesCategoryEnum["Hypothesis"] = "hypothesis";
    NodesForksCreateNodeAttributesCategoryEnum["Instrumentation"] = "instrumentation";
    NodesForksCreateNodeAttributesCategoryEnum["MethodsAndMeasures"] = "methods and measures";
    NodesForksCreateNodeAttributesCategoryEnum["Procedure"] = "procedure";
    NodesForksCreateNodeAttributesCategoryEnum["Project"] = "project";
    NodesForksCreateNodeAttributesCategoryEnum["Software"] = "software";
    NodesForksCreateNodeAttributesCategoryEnum["Other"] = "other";
})(NodesForksCreateNodeAttributesCategoryEnum || (NodesForksCreateNodeAttributesCategoryEnum = {}));
// NodesForksCreateNodeAttributesInput
/**
 * The properties of the node entity.
**/
var NodesForksCreateNodeAttributesInput = /** @class */ (function (_super) {
    __extends(NodesForksCreateNodeAttributesInput, _super);
    function NodesForksCreateNodeAttributesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], NodesForksCreateNodeAttributesInput.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodesForksCreateNodeAttributesInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_license" }),
        __metadata("design:type", String)
    ], NodesForksCreateNodeAttributesInput.prototype, "nodeLicense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], NodesForksCreateNodeAttributesInput.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], NodesForksCreateNodeAttributesInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_from" }),
        __metadata("design:type", String)
    ], NodesForksCreateNodeAttributesInput.prototype, "templateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], NodesForksCreateNodeAttributesInput.prototype, "title", void 0);
    return NodesForksCreateNodeAttributesInput;
}(SpeakeasyBase));
export { NodesForksCreateNodeAttributesInput };
var NodesForksCreateNodeInput = /** @class */ (function (_super) {
    __extends(NodesForksCreateNodeInput, _super);
    function NodesForksCreateNodeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", NodesForksCreateNodeAttributesInput)
    ], NodesForksCreateNodeInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NodesForksCreateNodeInput.prototype, "type", void 0);
    return NodesForksCreateNodeInput;
}(SpeakeasyBase));
export { NodesForksCreateNodeInput };
var NodesForksCreateRequest = /** @class */ (function (_super) {
    __extends(NodesForksCreateRequest, _super);
    function NodesForksCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NodesForksCreatePathParams)
    ], NodesForksCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NodesForksCreateNodeInput)
    ], NodesForksCreateRequest.prototype, "request", void 0);
    return NodesForksCreateRequest;
}(SpeakeasyBase));
export { NodesForksCreateRequest };
var NodesForksCreateResponse = /** @class */ (function (_super) {
    __extends(NodesForksCreateResponse, _super);
    function NodesForksCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NodesForksCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NodesForksCreateResponse.prototype, "statusCode", void 0);
    return NodesForksCreateResponse;
}(SpeakeasyBase));
export { NodesForksCreateResponse };
