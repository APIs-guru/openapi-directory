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
import { GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination } from "./googlecloudhealthcarev1beta1annotationbigquerydestination";
import { InfoTypeConfig } from "./infotypeconfig";
// EvaluateAnnotationStoreRequest
/**
 * Request to evaluate an Annotation store against a ground truth [Annotation store].
**/
var EvaluateAnnotationStoreRequest = /** @class */ (function (_super) {
    __extends(EvaluateAnnotationStoreRequest, _super);
    function EvaluateAnnotationStoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryDestination" }),
        __metadata("design:type", GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination)
    ], EvaluateAnnotationStoreRequest.prototype, "bigqueryDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evalInfoTypeMapping" }),
        __metadata("design:type", Map)
    ], EvaluateAnnotationStoreRequest.prototype, "evalInfoTypeMapping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goldenInfoTypeMapping" }),
        __metadata("design:type", Map)
    ], EvaluateAnnotationStoreRequest.prototype, "goldenInfoTypeMapping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goldenStore" }),
        __metadata("design:type", String)
    ], EvaluateAnnotationStoreRequest.prototype, "goldenStore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infoTypeConfig" }),
        __metadata("design:type", InfoTypeConfig)
    ], EvaluateAnnotationStoreRequest.prototype, "infoTypeConfig", void 0);
    return EvaluateAnnotationStoreRequest;
}(SpeakeasyBase));
export { EvaluateAnnotationStoreRequest };
