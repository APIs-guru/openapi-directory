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
export var NodesCreateNodeAttributesCategoryEnum;
(function (NodesCreateNodeAttributesCategoryEnum) {
    NodesCreateNodeAttributesCategoryEnum["Analysis"] = "analysis";
    NodesCreateNodeAttributesCategoryEnum["Communication"] = "communication";
    NodesCreateNodeAttributesCategoryEnum["Data"] = "data";
    NodesCreateNodeAttributesCategoryEnum["Hypothesis"] = "hypothesis";
    NodesCreateNodeAttributesCategoryEnum["Instrumentation"] = "instrumentation";
    NodesCreateNodeAttributesCategoryEnum["MethodsAndMeasures"] = "methods and measures";
    NodesCreateNodeAttributesCategoryEnum["Procedure"] = "procedure";
    NodesCreateNodeAttributesCategoryEnum["Project"] = "project";
    NodesCreateNodeAttributesCategoryEnum["Software"] = "software";
    NodesCreateNodeAttributesCategoryEnum["Other"] = "other";
})(NodesCreateNodeAttributesCategoryEnum || (NodesCreateNodeAttributesCategoryEnum = {}));
// NodesCreateNodeAttributesInput
/**
 * The properties of the node entity.
**/
var NodesCreateNodeAttributesInput = /** @class */ (function (_super) {
    __extends(NodesCreateNodeAttributesInput, _super);
    function NodesCreateNodeAttributesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], NodesCreateNodeAttributesInput.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodesCreateNodeAttributesInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_license" }),
        __metadata("design:type", String)
    ], NodesCreateNodeAttributesInput.prototype, "nodeLicense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], NodesCreateNodeAttributesInput.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], NodesCreateNodeAttributesInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_from" }),
        __metadata("design:type", String)
    ], NodesCreateNodeAttributesInput.prototype, "templateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], NodesCreateNodeAttributesInput.prototype, "title", void 0);
    return NodesCreateNodeAttributesInput;
}(SpeakeasyBase));
export { NodesCreateNodeAttributesInput };
var NodesCreateNodeInput = /** @class */ (function (_super) {
    __extends(NodesCreateNodeInput, _super);
    function NodesCreateNodeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", NodesCreateNodeAttributesInput)
    ], NodesCreateNodeInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NodesCreateNodeInput.prototype, "type", void 0);
    return NodesCreateNodeInput;
}(SpeakeasyBase));
export { NodesCreateNodeInput };
var NodesCreateRequest = /** @class */ (function (_super) {
    __extends(NodesCreateRequest, _super);
    function NodesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NodesCreateNodeInput)
    ], NodesCreateRequest.prototype, "request", void 0);
    return NodesCreateRequest;
}(SpeakeasyBase));
export { NodesCreateRequest };
var NodesCreateResponse = /** @class */ (function (_super) {
    __extends(NodesCreateResponse, _super);
    function NodesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NodesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NodesCreateResponse.prototype, "statusCode", void 0);
    return NodesCreateResponse;
}(SpeakeasyBase));
export { NodesCreateResponse };
