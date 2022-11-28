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
import { GoogleCloudDatacatalogV1TagTemplateField } from "./googleclouddatacatalogv1tagtemplatefield";
import { GoogleCloudDatacatalogV1TagTemplateFieldInput } from "./googleclouddatacatalogv1tagtemplatefield";
// GoogleCloudDatacatalogV1TagTemplate
/**
 * A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to GCP resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.
**/
var GoogleCloudDatacatalogV1TagTemplate = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1TagTemplate, _super);
    function GoogleCloudDatacatalogV1TagTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagTemplate.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1TagTemplateField }),
        __metadata("design:type", Map)
    ], GoogleCloudDatacatalogV1TagTemplate.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPubliclyReadable" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDatacatalogV1TagTemplate.prototype, "isPubliclyReadable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagTemplate.prototype, "name", void 0);
    return GoogleCloudDatacatalogV1TagTemplate;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1TagTemplate };
// GoogleCloudDatacatalogV1TagTemplateInput
/**
 * A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to GCP resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.
**/
var GoogleCloudDatacatalogV1TagTemplateInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1TagTemplateInput, _super);
    function GoogleCloudDatacatalogV1TagTemplateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagTemplateInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1TagTemplateFieldInput }),
        __metadata("design:type", Map)
    ], GoogleCloudDatacatalogV1TagTemplateInput.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPubliclyReadable" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDatacatalogV1TagTemplateInput.prototype, "isPubliclyReadable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagTemplateInput.prototype, "name", void 0);
    return GoogleCloudDatacatalogV1TagTemplateInput;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1TagTemplateInput };
