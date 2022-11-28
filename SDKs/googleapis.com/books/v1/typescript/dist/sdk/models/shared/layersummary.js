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
var Layersummary = /** @class */ (function (_super) {
    __extends(Layersummary, _super);
    function Layersummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationCount" }),
        __metadata("design:type", Number)
    ], Layersummary.prototype, "annotationCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationTypes" }),
        __metadata("design:type", Array)
    ], Layersummary.prototype, "annotationTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationsDataLink" }),
        __metadata("design:type", String)
    ], Layersummary.prototype, "annotationsDataLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationsLink" }),
        __metadata("design:type", String)
    ], Layersummary.prototype, "annotationsLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentVersion" }),
        __metadata("design:type", String)
    ], Layersummary.prototype, "contentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataCount" }),
        __metadata("design:type", Number)
    ], Layersummary.prototype, "dataCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Layersummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Layersummary.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layerId" }),
        __metadata("design:type", String)
    ], Layersummary.prototype, "layerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Layersummary.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], Layersummary.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeAnnotationsVersion" }),
        __metadata("design:type", String)
    ], Layersummary.prototype, "volumeAnnotationsVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeId" }),
        __metadata("design:type", String)
    ], Layersummary.prototype, "volumeId", void 0);
    return Layersummary;
}(SpeakeasyBase));
export { Layersummary };
