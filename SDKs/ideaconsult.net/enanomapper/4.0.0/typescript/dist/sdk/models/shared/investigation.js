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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var Investigation = /** @class */ (function (_super) {
    __extends(Investigation, _super);
    function Investigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=_childDocuments_" }),
        __metadata("design:type", Map)
    ], Investigation.prototype, "childDocuments", void 0);
    __decorate([
        Metadata({ data: "json, name=assay" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "assay", void 0);
    __decorate([
        Metadata({ data: "json, name=document_uuid" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "documentUuid", void 0);
    __decorate([
        Metadata({ data: "json, name=effectendpoint" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "effectendpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "endpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=endpointcategory" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "endpointcategory", void 0);
    __decorate([
        Metadata({ data: "json, name=err" }),
        __metadata("design:type", Number)
    ], Investigation.prototype, "err", void 0);
    __decorate([
        Metadata({ data: "json, name=errQualifier" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "errQualifier", void 0);
    __decorate([
        Metadata({ data: "json, name=guidance" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "guidance", void 0);
    __decorate([
        Metadata({ data: "json, name=investigation" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "investigation", void 0);
    __decorate([
        Metadata({ data: "json, name=loQualifier" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "loQualifier", void 0);
    __decorate([
        Metadata({ data: "json, name=loValue" }),
        __metadata("design:type", Number)
    ], Investigation.prototype, "loValue", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=owner_name" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "ownerName", void 0);
    __decorate([
        Metadata({ data: "json, name=publicname" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "publicname", void 0);
    __decorate([
        Metadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "reference", void 0);
    __decorate([
        Metadata({ data: "json, name=reference_owner" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "referenceOwner", void 0);
    __decorate([
        Metadata({ data: "json, name=reference_year" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "referenceYear", void 0);
    __decorate([
        Metadata({ data: "json, name=resulttype" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "resulttype", void 0);
    __decorate([
        Metadata({ data: "json, name=s_uuid" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "sUuid", void 0);
    __decorate([
        Metadata({ data: "json, name=studyResultType" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "studyResultType", void 0);
    __decorate([
        Metadata({ data: "json, name=substanceType" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "substanceType", void 0);
    __decorate([
        Metadata({ data: "json, name=textValue" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "textValue", void 0);
    __decorate([
        Metadata({ data: "json, name=topcategory" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "topcategory", void 0);
    __decorate([
        Metadata({ data: "json, name=type_s" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "typeS", void 0);
    __decorate([
        Metadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "unit", void 0);
    __decorate([
        Metadata({ data: "json, name=upQualifier" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "upQualifier", void 0);
    __decorate([
        Metadata({ data: "json, name=upValue" }),
        __metadata("design:type", Number)
    ], Investigation.prototype, "upValue", void 0);
    __decorate([
        Metadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], Investigation.prototype, "updated", void 0);
    return Investigation;
}(SpeakeasyBase));
export { Investigation };
