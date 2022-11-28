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
var NodesChildrenCreatePathParams = /** @class */ (function (_super) {
    __extends(NodesChildrenCreatePathParams, _super);
    function NodesChildrenCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", String)
    ], NodesChildrenCreatePathParams.prototype, "nodeId", void 0);
    return NodesChildrenCreatePathParams;
}(SpeakeasyBase));
export { NodesChildrenCreatePathParams };
export var NodesChildrenCreateNodeAttributesCategoryEnum;
(function (NodesChildrenCreateNodeAttributesCategoryEnum) {
    NodesChildrenCreateNodeAttributesCategoryEnum["Analysis"] = "analysis";
    NodesChildrenCreateNodeAttributesCategoryEnum["Communication"] = "communication";
    NodesChildrenCreateNodeAttributesCategoryEnum["Data"] = "data";
    NodesChildrenCreateNodeAttributesCategoryEnum["Hypothesis"] = "hypothesis";
    NodesChildrenCreateNodeAttributesCategoryEnum["Instrumentation"] = "instrumentation";
    NodesChildrenCreateNodeAttributesCategoryEnum["MethodsAndMeasures"] = "methods and measures";
    NodesChildrenCreateNodeAttributesCategoryEnum["Procedure"] = "procedure";
    NodesChildrenCreateNodeAttributesCategoryEnum["Project"] = "project";
    NodesChildrenCreateNodeAttributesCategoryEnum["Software"] = "software";
    NodesChildrenCreateNodeAttributesCategoryEnum["Other"] = "other";
})(NodesChildrenCreateNodeAttributesCategoryEnum || (NodesChildrenCreateNodeAttributesCategoryEnum = {}));
// NodesChildrenCreateNodeAttributesInput
/**
 * The properties of the node entity.
**/
var NodesChildrenCreateNodeAttributesInput = /** @class */ (function (_super) {
    __extends(NodesChildrenCreateNodeAttributesInput, _super);
    function NodesChildrenCreateNodeAttributesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], NodesChildrenCreateNodeAttributesInput.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodesChildrenCreateNodeAttributesInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_license" }),
        __metadata("design:type", String)
    ], NodesChildrenCreateNodeAttributesInput.prototype, "nodeLicense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], NodesChildrenCreateNodeAttributesInput.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], NodesChildrenCreateNodeAttributesInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_from" }),
        __metadata("design:type", String)
    ], NodesChildrenCreateNodeAttributesInput.prototype, "templateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], NodesChildrenCreateNodeAttributesInput.prototype, "title", void 0);
    return NodesChildrenCreateNodeAttributesInput;
}(SpeakeasyBase));
export { NodesChildrenCreateNodeAttributesInput };
var NodesChildrenCreateNodeInput = /** @class */ (function (_super) {
    __extends(NodesChildrenCreateNodeInput, _super);
    function NodesChildrenCreateNodeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", NodesChildrenCreateNodeAttributesInput)
    ], NodesChildrenCreateNodeInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NodesChildrenCreateNodeInput.prototype, "type", void 0);
    return NodesChildrenCreateNodeInput;
}(SpeakeasyBase));
export { NodesChildrenCreateNodeInput };
var NodesChildrenCreateRequest = /** @class */ (function (_super) {
    __extends(NodesChildrenCreateRequest, _super);
    function NodesChildrenCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NodesChildrenCreatePathParams)
    ], NodesChildrenCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NodesChildrenCreateNodeInput)
    ], NodesChildrenCreateRequest.prototype, "request", void 0);
    return NodesChildrenCreateRequest;
}(SpeakeasyBase));
export { NodesChildrenCreateRequest };
var NodesChildrenCreateResponse = /** @class */ (function (_super) {
    __extends(NodesChildrenCreateResponse, _super);
    function NodesChildrenCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NodesChildrenCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NodesChildrenCreateResponse.prototype, "statusCode", void 0);
    return NodesChildrenCreateResponse;
}(SpeakeasyBase));
export { NodesChildrenCreateResponse };
