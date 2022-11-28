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
import { GoogleCloudDocumentaiV1DocumentSchema } from "./googleclouddocumentaiv1documentschema";
import { GoogleCloudDocumentaiV1Document } from "./googleclouddocumentaiv1document";
export var GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum;
(function (GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum) {
    GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum["Default"] = "DEFAULT";
    GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum["Urgent"] = "URGENT";
})(GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum || (GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum = {}));
// GoogleCloudDocumentaiV1ReviewDocumentRequest
/**
 * Request message for review document method.
**/
var GoogleCloudDocumentaiV1ReviewDocumentRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1ReviewDocumentRequest, _super);
    function GoogleCloudDocumentaiV1ReviewDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentSchema" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentSchema)
    ], GoogleCloudDocumentaiV1ReviewDocumentRequest.prototype, "documentSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableSchemaValidation" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDocumentaiV1ReviewDocumentRequest.prototype, "enableSchemaValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inlineDocument" }),
        __metadata("design:type", GoogleCloudDocumentaiV1Document)
    ], GoogleCloudDocumentaiV1ReviewDocumentRequest.prototype, "inlineDocument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ReviewDocumentRequest.prototype, "priority", void 0);
    return GoogleCloudDocumentaiV1ReviewDocumentRequest;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1ReviewDocumentRequest };
