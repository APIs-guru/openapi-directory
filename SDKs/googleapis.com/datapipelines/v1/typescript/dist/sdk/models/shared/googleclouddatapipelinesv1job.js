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
import { GoogleCloudDatapipelinesV1DataflowJobDetails } from "./googleclouddatapipelinesv1dataflowjobdetails";
import { GoogleRpcStatus } from "./googlerpcstatus";
export var GoogleCloudDatapipelinesV1JobStateEnum;
(function (GoogleCloudDatapipelinesV1JobStateEnum) {
    GoogleCloudDatapipelinesV1JobStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDatapipelinesV1JobStateEnum["StatePending"] = "STATE_PENDING";
    GoogleCloudDatapipelinesV1JobStateEnum["StateRunning"] = "STATE_RUNNING";
    GoogleCloudDatapipelinesV1JobStateEnum["StateDone"] = "STATE_DONE";
    GoogleCloudDatapipelinesV1JobStateEnum["StateFailed"] = "STATE_FAILED";
    GoogleCloudDatapipelinesV1JobStateEnum["StateCancelled"] = "STATE_CANCELLED";
})(GoogleCloudDatapipelinesV1JobStateEnum || (GoogleCloudDatapipelinesV1JobStateEnum = {}));
// GoogleCloudDatapipelinesV1Job
/**
 * Definition of the job information maintained by the pipeline. Fields in this entity are retrieved from the executor API (e.g. Dataflow API).
**/
var GoogleCloudDatapipelinesV1Job = /** @class */ (function (_super) {
    __extends(GoogleCloudDatapipelinesV1Job, _super);
    function GoogleCloudDatapipelinesV1Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1Job.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=dataflowJobDetails" }),
        __metadata("design:type", GoogleCloudDatapipelinesV1DataflowJobDetails)
    ], GoogleCloudDatapipelinesV1Job.prototype, "dataflowJobDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1Job.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1Job.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1Job.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1Job.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", GoogleRpcStatus)
    ], GoogleCloudDatapipelinesV1Job.prototype, "status", void 0);
    return GoogleCloudDatapipelinesV1Job;
}(SpeakeasyBase));
export { GoogleCloudDatapipelinesV1Job };
