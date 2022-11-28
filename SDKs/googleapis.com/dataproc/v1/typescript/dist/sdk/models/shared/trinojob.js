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
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";
// TrinoJob
/**
 * A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.
**/
var TrinoJob = /** @class */ (function (_super) {
    __extends(TrinoJob, _super);
    function TrinoJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientTags" }),
        __metadata("design:type", Array)
    ], TrinoJob.prototype, "clientTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continueOnFailure" }),
        __metadata("design:type", Boolean)
    ], TrinoJob.prototype, "continueOnFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", LoggingConfig)
    ], TrinoJob.prototype, "loggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputFormat" }),
        __metadata("design:type", String)
    ], TrinoJob.prototype, "outputFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Map)
    ], TrinoJob.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryFileUri" }),
        __metadata("design:type", String)
    ], TrinoJob.prototype, "queryFileUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryList" }),
        __metadata("design:type", QueryList)
    ], TrinoJob.prototype, "queryList", void 0);
    return TrinoJob;
}(SpeakeasyBase));
export { TrinoJob };
