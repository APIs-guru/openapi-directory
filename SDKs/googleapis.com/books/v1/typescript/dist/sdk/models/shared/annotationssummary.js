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
var AnnotationsSummaryLayers = /** @class */ (function (_super) {
    __extends(AnnotationsSummaryLayers, _super);
    function AnnotationsSummaryLayers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedCharacterCount" }),
        __metadata("design:type", Number)
    ], AnnotationsSummaryLayers.prototype, "allowedCharacterCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layerId" }),
        __metadata("design:type", String)
    ], AnnotationsSummaryLayers.prototype, "layerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitType" }),
        __metadata("design:type", String)
    ], AnnotationsSummaryLayers.prototype, "limitType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remainingCharacterCount" }),
        __metadata("design:type", Number)
    ], AnnotationsSummaryLayers.prototype, "remainingCharacterCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], AnnotationsSummaryLayers.prototype, "updated", void 0);
    return AnnotationsSummaryLayers;
}(SpeakeasyBase));
export { AnnotationsSummaryLayers };
var AnnotationsSummary = /** @class */ (function (_super) {
    __extends(AnnotationsSummary, _super);
    function AnnotationsSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], AnnotationsSummary.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layers", elemType: AnnotationsSummaryLayers }),
        __metadata("design:type", Array)
    ], AnnotationsSummary.prototype, "layers", void 0);
    return AnnotationsSummary;
}(SpeakeasyBase));
export { AnnotationsSummary };
