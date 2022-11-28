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
import { EnterpriseCrmEventbusProtoConditionResult } from "./enterprisecrmeventbusprotoconditionresult";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata } from "./enterprisecrmeventbusprotoeventexecutionsnapshoteventexecutionsnapshotmetadata";
import { EnterpriseCrmEventbusProtoTaskExecutionDetails } from "./enterprisecrmeventbusprototaskexecutiondetails";
var EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot = /** @class */ (function (_super) {
    __extends(EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot, _super);
    function EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkpointTaskNumber" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot.prototype, "checkpointTaskNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditionResults", elemType: EnterpriseCrmEventbusProtoConditionResult }),
        __metadata("design:type", Array)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot.prototype, "conditionResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffParams" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoEventParameters)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot.prototype, "diffParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventExecutionInfoId" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot.prototype, "eventExecutionInfoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventExecutionSnapshotId" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot.prototype, "eventExecutionSnapshotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventExecutionSnapshotMetadata" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot.prototype, "eventExecutionSnapshotMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventParams" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoEventParameters)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot.prototype, "eventParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotTime" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot.prototype, "snapshotTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskExecutionDetails", elemType: EnterpriseCrmEventbusProtoTaskExecutionDetails }),
        __metadata("design:type", Array)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot.prototype, "taskExecutionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskName" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot.prototype, "taskName", void 0);
    return EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot;
}(SpeakeasyBase));
export { EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot };
