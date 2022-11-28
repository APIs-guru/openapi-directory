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
import { GoogleCloudDatacatalogV1beta1TagField } from "./googleclouddatacatalogv1beta1tagfield";
import { GoogleCloudDatacatalogV1beta1TagFieldInput } from "./googleclouddatacatalogv1beta1tagfield";
// GoogleCloudDatacatalogV1beta1Tag
/**
 * Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
**/
var GoogleCloudDatacatalogV1beta1Tag = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1beta1Tag, _super);
    function GoogleCloudDatacatalogV1beta1Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1Tag.prototype, "column", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1beta1TagField }),
        __metadata("design:type", Map)
    ], GoogleCloudDatacatalogV1beta1Tag.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1Tag.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1Tag.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateDisplayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1Tag.prototype, "templateDisplayName", void 0);
    return GoogleCloudDatacatalogV1beta1Tag;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1beta1Tag };
// GoogleCloudDatacatalogV1beta1TagInput
/**
 * Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
**/
var GoogleCloudDatacatalogV1beta1TagInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1beta1TagInput, _super);
    function GoogleCloudDatacatalogV1beta1TagInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1TagInput.prototype, "column", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1beta1TagFieldInput }),
        __metadata("design:type", Map)
    ], GoogleCloudDatacatalogV1beta1TagInput.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1TagInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1TagInput.prototype, "template", void 0);
    return GoogleCloudDatacatalogV1beta1TagInput;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1beta1TagInput };
