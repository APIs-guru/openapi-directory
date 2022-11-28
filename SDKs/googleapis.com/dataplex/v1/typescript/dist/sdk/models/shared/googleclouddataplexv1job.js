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
export var GoogleCloudDataplexV1JobServiceEnum;
(function (GoogleCloudDataplexV1JobServiceEnum) {
    GoogleCloudDataplexV1JobServiceEnum["ServiceUnspecified"] = "SERVICE_UNSPECIFIED";
    GoogleCloudDataplexV1JobServiceEnum["Dataproc"] = "DATAPROC";
})(GoogleCloudDataplexV1JobServiceEnum || (GoogleCloudDataplexV1JobServiceEnum = {}));
export var GoogleCloudDataplexV1JobStateEnum;
(function (GoogleCloudDataplexV1JobStateEnum) {
    GoogleCloudDataplexV1JobStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDataplexV1JobStateEnum["Running"] = "RUNNING";
    GoogleCloudDataplexV1JobStateEnum["Cancelling"] = "CANCELLING";
    GoogleCloudDataplexV1JobStateEnum["Cancelled"] = "CANCELLED";
    GoogleCloudDataplexV1JobStateEnum["Succeeded"] = "SUCCEEDED";
    GoogleCloudDataplexV1JobStateEnum["Failed"] = "FAILED";
    GoogleCloudDataplexV1JobStateEnum["Aborted"] = "ABORTED";
})(GoogleCloudDataplexV1JobStateEnum || (GoogleCloudDataplexV1JobStateEnum = {}));
// GoogleCloudDataplexV1Job
/**
 * A job represents an instance of a task.
**/
var GoogleCloudDataplexV1Job = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1Job, _super);
    function GoogleCloudDataplexV1Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Job.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Job.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Job.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retryCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudDataplexV1Job.prototype, "retryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Job.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceJob" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Job.prototype, "serviceJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Job.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Job.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Job.prototype, "uid", void 0);
    return GoogleCloudDataplexV1Job;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1Job };
