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
import { License } from "./license";
// PackageInfoOccurrence
/**
 * PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/
**/
var PackageInfoOccurrence = /** @class */ (function (_super) {
    __extends(PackageInfoOccurrence, _super);
    function PackageInfoOccurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrence.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrence.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homePage" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrence.prototype, "homePage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrence.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseConcluded" }),
        __metadata("design:type", License)
    ], PackageInfoOccurrence.prototype, "licenseConcluded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageType" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrence.prototype, "packageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceInfo" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrence.prototype, "sourceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summaryDescription" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrence.prototype, "summaryDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrence.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrence.prototype, "version", void 0);
    return PackageInfoOccurrence;
}(SpeakeasyBase));
export { PackageInfoOccurrence };
// PackageInfoOccurrenceInput
/**
 * PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/
**/
var PackageInfoOccurrenceInput = /** @class */ (function (_super) {
    __extends(PackageInfoOccurrenceInput, _super);
    function PackageInfoOccurrenceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrenceInput.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrenceInput.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrenceInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseConcluded" }),
        __metadata("design:type", License)
    ], PackageInfoOccurrenceInput.prototype, "licenseConcluded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceInfo" }),
        __metadata("design:type", String)
    ], PackageInfoOccurrenceInput.prototype, "sourceInfo", void 0);
    return PackageInfoOccurrenceInput;
}(SpeakeasyBase));
export { PackageInfoOccurrenceInput };
