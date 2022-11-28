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
// DocumentOccurrence
/**
 * DocumentOccurrence represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/
**/
var DocumentOccurrence = /** @class */ (function (_super) {
    __extends(DocumentOccurrence, _super);
    function DocumentOccurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], DocumentOccurrence.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorComment" }),
        __metadata("design:type", String)
    ], DocumentOccurrence.prototype, "creatorComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creators" }),
        __metadata("design:type", Array)
    ], DocumentOccurrence.prototype, "creators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentComment" }),
        __metadata("design:type", String)
    ], DocumentOccurrence.prototype, "documentComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalDocumentRefs" }),
        __metadata("design:type", Array)
    ], DocumentOccurrence.prototype, "externalDocumentRefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DocumentOccurrence.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseListVersion" }),
        __metadata("design:type", String)
    ], DocumentOccurrence.prototype, "licenseListVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespace" }),
        __metadata("design:type", String)
    ], DocumentOccurrence.prototype, "namespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], DocumentOccurrence.prototype, "title", void 0);
    return DocumentOccurrence;
}(SpeakeasyBase));
export { DocumentOccurrence };
