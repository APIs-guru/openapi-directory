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
import * as shared from "../shared";
import { BigQueryOptions } from "./bigqueryoptions";
export var LogSinkOutputVersionFormatEnum;
(function (LogSinkOutputVersionFormatEnum) {
    LogSinkOutputVersionFormatEnum["VersionFormatUnspecified"] = "VERSION_FORMAT_UNSPECIFIED";
    LogSinkOutputVersionFormatEnum["V2"] = "V2";
    LogSinkOutputVersionFormatEnum["V1"] = "V1";
})(LogSinkOutputVersionFormatEnum || (LogSinkOutputVersionFormatEnum = {}));
// LogSink
/**
 * Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
**/
var LogSink = /** @class */ (function (_super) {
    __extends(LogSink, _super);
    function LogSink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bigqueryOptions" }),
        __metadata("design:type", BigQueryOptions)
    ], LogSink.prototype, "bigqueryOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], LogSink.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LogSink.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], LogSink.prototype, "destination", void 0);
    __decorate([
        Metadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], LogSink.prototype, "disabled", void 0);
    __decorate([
        Metadata({ data: "json, name=exclusions", elemType: shared.LogExclusion }),
        __metadata("design:type", Array)
    ], LogSink.prototype, "exclusions", void 0);
    __decorate([
        Metadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], LogSink.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "json, name=includeChildren" }),
        __metadata("design:type", Boolean)
    ], LogSink.prototype, "includeChildren", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LogSink.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=outputVersionFormat" }),
        __metadata("design:type", String)
    ], LogSink.prototype, "outputVersionFormat", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], LogSink.prototype, "updateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=writerIdentity" }),
        __metadata("design:type", String)
    ], LogSink.prototype, "writerIdentity", void 0);
    return LogSink;
}(SpeakeasyBase));
export { LogSink };
