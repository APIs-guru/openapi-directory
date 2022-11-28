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
import { GoogleCloudIntegrationsV1alphaAttemptStats } from "./googlecloudintegrationsv1alphaattemptstats";
import { GoogleCloudIntegrationsV1alphaExecutionSnapshot } from "./googlecloudintegrationsv1alphaexecutionsnapshot";
export var GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum;
(function (GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum) {
    GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum["Pending"] = "PENDING";
    GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum["Processing"] = "PROCESSING";
    GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum["Succeeded"] = "SUCCEEDED";
    GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum["Failed"] = "FAILED";
    GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum["Cancelled"] = "CANCELLED";
    GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum["RetryOnHold"] = "RETRY_ON_HOLD";
    GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum["Suspended"] = "SUSPENDED";
})(GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum || (GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum = {}));
// GoogleCloudIntegrationsV1alphaExecutionDetails
/**
 * Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics.
**/
var GoogleCloudIntegrationsV1alphaExecutionDetails = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaExecutionDetails, _super);
    function GoogleCloudIntegrationsV1alphaExecutionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attemptStats", elemType: GoogleCloudIntegrationsV1alphaAttemptStats }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaExecutionDetails.prototype, "attemptStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionSnapshots", elemType: GoogleCloudIntegrationsV1alphaExecutionSnapshot }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaExecutionDetails.prototype, "executionSnapshots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaExecutionDetails.prototype, "state", void 0);
    return GoogleCloudIntegrationsV1alphaExecutionDetails;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaExecutionDetails };
