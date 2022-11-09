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
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], Media.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Media.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Media.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=max_downloads_allowed" }),
        __metadata("design:type", Number)
    ], Media.prototype, "maxDownloadsAllowed", void 0);
    __decorate([
        Metadata({ data: "json, name=media_size" }),
        __metadata("design:type", Number)
    ], Media.prototype, "mediaSize", void 0);
    __decorate([
        Metadata({ data: "json, name=metadata_primary" }),
        __metadata("design:type", String)
    ], Media.prototype, "metadataPrimary", void 0);
    __decorate([
        Metadata({ data: "json, name=metadata_secondary" }),
        __metadata("design:type", String)
    ], Media.prototype, "metadataSecondary", void 0);
    __decorate([
        Metadata({ data: "json, name=mime_type" }),
        __metadata("design:type", String)
    ], Media.prototype, "mimeType", void 0);
    __decorate([
        Metadata({ data: "json, name=original_file_name" }),
        __metadata("design:type", String)
    ], Media.prototype, "originalFileName", void 0);
    __decorate([
        Metadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], Media.prototype, "public", void 0);
    __decorate([
        Metadata({ data: "json, name=store_id" }),
        __metadata("design:type", String)
    ], Media.prototype, "storeId", void 0);
    __decorate([
        Metadata({ data: "json, name=time_created" }),
        __metadata("design:type", String)
    ], Media.prototype, "timeCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=time_last_updated" }),
        __metadata("design:type", String)
    ], Media.prototype, "timeLastUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=times_downloaded" }),
        __metadata("design:type", Number)
    ], Media.prototype, "timesDownloaded", void 0);
    return Media;
}(SpeakeasyBase));
export { Media };
