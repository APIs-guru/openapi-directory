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
import { Status } from "./status";
import { GoogleCloudVisionV1p2beta1InputConfig } from "./googlecloudvisionv1p2beta1inputconfig";
import { GoogleCloudVisionV1p2beta1AnnotateImageResponse } from "./googlecloudvisionv1p2beta1annotateimageresponse";
// GoogleCloudVisionV1p2beta1AnnotateFileResponse
/**
 * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
**/
var GoogleCloudVisionV1p2beta1AnnotateFileResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudVisionV1p2beta1AnnotateFileResponse, _super);
    function GoogleCloudVisionV1p2beta1AnnotateFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], GoogleCloudVisionV1p2beta1AnnotateFileResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputConfig" }),
        __metadata("design:type", GoogleCloudVisionV1p2beta1InputConfig)
    ], GoogleCloudVisionV1p2beta1AnnotateFileResponse.prototype, "inputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responses", elemType: GoogleCloudVisionV1p2beta1AnnotateImageResponse }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p2beta1AnnotateFileResponse.prototype, "responses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPages" }),
        __metadata("design:type", Number)
    ], GoogleCloudVisionV1p2beta1AnnotateFileResponse.prototype, "totalPages", void 0);
    return GoogleCloudVisionV1p2beta1AnnotateFileResponse;
}(SpeakeasyBase));
export { GoogleCloudVisionV1p2beta1AnnotateFileResponse };
