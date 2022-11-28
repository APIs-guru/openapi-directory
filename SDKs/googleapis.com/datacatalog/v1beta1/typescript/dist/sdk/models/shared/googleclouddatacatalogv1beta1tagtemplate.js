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
import { GoogleCloudDatacatalogV1beta1TagTemplateFieldInput } from "./googleclouddatacatalogv1beta1tagtemplatefield";
import { GoogleCloudDatacatalogV1beta1TagTemplateField } from "./googleclouddatacatalogv1beta1tagtemplatefield";
// GoogleCloudDatacatalogV1beta1TagTemplateInput
/**
 * A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to GCP resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources.
**/
var GoogleCloudDatacatalogV1beta1TagTemplateInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1beta1TagTemplateInput, _super);
    function GoogleCloudDatacatalogV1beta1TagTemplateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1TagTemplateInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1beta1TagTemplateFieldInput }),
        __metadata("design:type", Map)
    ], GoogleCloudDatacatalogV1beta1TagTemplateInput.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1TagTemplateInput.prototype, "name", void 0);
    return GoogleCloudDatacatalogV1beta1TagTemplateInput;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1beta1TagTemplateInput };
// GoogleCloudDatacatalogV1beta1TagTemplate
/**
 * A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to GCP resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources.
**/
var GoogleCloudDatacatalogV1beta1TagTemplate = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1beta1TagTemplate, _super);
    function GoogleCloudDatacatalogV1beta1TagTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1TagTemplate.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1beta1TagTemplateField }),
        __metadata("design:type", Map)
    ], GoogleCloudDatacatalogV1beta1TagTemplate.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1TagTemplate.prototype, "name", void 0);
    return GoogleCloudDatacatalogV1beta1TagTemplate;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1beta1TagTemplate };
