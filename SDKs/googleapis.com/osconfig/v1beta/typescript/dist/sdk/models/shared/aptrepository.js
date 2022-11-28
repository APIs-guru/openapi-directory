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
export var AptRepositoryArchiveTypeEnum;
(function (AptRepositoryArchiveTypeEnum) {
    AptRepositoryArchiveTypeEnum["ArchiveTypeUnspecified"] = "ARCHIVE_TYPE_UNSPECIFIED";
    AptRepositoryArchiveTypeEnum["Deb"] = "DEB";
    AptRepositoryArchiveTypeEnum["DebSrc"] = "DEB_SRC";
})(AptRepositoryArchiveTypeEnum || (AptRepositoryArchiveTypeEnum = {}));
// AptRepository
/**
 * Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.
**/
var AptRepository = /** @class */ (function (_super) {
    __extends(AptRepository, _super);
    function AptRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archiveType" }),
        __metadata("design:type", String)
    ], AptRepository.prototype, "archiveType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=components" }),
        __metadata("design:type", Array)
    ], AptRepository.prototype, "components", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distribution" }),
        __metadata("design:type", String)
    ], AptRepository.prototype, "distribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gpgKey" }),
        __metadata("design:type", String)
    ], AptRepository.prototype, "gpgKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], AptRepository.prototype, "uri", void 0);
    return AptRepository;
}(SpeakeasyBase));
export { AptRepository };
