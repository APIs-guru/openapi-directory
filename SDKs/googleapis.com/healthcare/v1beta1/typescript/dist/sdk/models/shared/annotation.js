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
import { AnnotationSource } from "./annotationsource";
import { ImageAnnotation } from "./imageannotation";
import { ResourceAnnotation } from "./resourceannotation";
import { SensitiveTextAnnotation } from "./sensitivetextannotation";
// Annotation
/**
 * An annotation record.
**/
var Annotation = /** @class */ (function (_super) {
    __extends(Annotation, _super);
    function Annotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationSource" }),
        __metadata("design:type", AnnotationSource)
    ], Annotation.prototype, "annotationSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customData" }),
        __metadata("design:type", Map)
    ], Annotation.prototype, "customData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageAnnotation" }),
        __metadata("design:type", ImageAnnotation)
    ], Annotation.prototype, "imageAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceAnnotation" }),
        __metadata("design:type", ResourceAnnotation)
    ], Annotation.prototype, "resourceAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textAnnotation" }),
        __metadata("design:type", SensitiveTextAnnotation)
    ], Annotation.prototype, "textAnnotation", void 0);
    return Annotation;
}(SpeakeasyBase));
export { Annotation };
