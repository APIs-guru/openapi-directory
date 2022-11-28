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
import { GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata } from "./googlecloudintegrationsv1alphaexecutionsnapshotexecutionsnapshotmetadata";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { GoogleCloudIntegrationsV1alphaTaskExecutionDetails } from "./googlecloudintegrationsv1alphataskexecutiondetails";
// GoogleCloudIntegrationsV1alphaExecutionSnapshot
/**
 * Contains the snapshot of the execution for a given checkpoint.
**/
var GoogleCloudIntegrationsV1alphaExecutionSnapshot = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaExecutionSnapshot, _super);
    function GoogleCloudIntegrationsV1alphaExecutionSnapshot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkpointTaskNumber" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaExecutionSnapshot.prototype, "checkpointTaskNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionSnapshotMetadata" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata)
    ], GoogleCloudIntegrationsV1alphaExecutionSnapshot.prototype, "executionSnapshotMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=params", elemType: GoogleCloudIntegrationsV1alphaValueType }),
        __metadata("design:type", Map)
    ], GoogleCloudIntegrationsV1alphaExecutionSnapshot.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskExecutionDetails", elemType: GoogleCloudIntegrationsV1alphaTaskExecutionDetails }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaExecutionSnapshot.prototype, "taskExecutionDetails", void 0);
    return GoogleCloudIntegrationsV1alphaExecutionSnapshot;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaExecutionSnapshot };
