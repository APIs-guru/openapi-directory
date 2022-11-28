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
import { EnterpriseCrmEventbusProtoTaskMetadata } from "./enterprisecrmeventbusprototaskmetadata";
import { EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage } from "./enterprisecrmfrontendseventbusprotoparamspecsmessage";
import { EnterpriseCrmEventbusStats } from "./enterprisecrmeventbusstats";
import { EnterpriseCrmEventbusProtoTaskUiConfig } from "./enterprisecrmeventbusprototaskuiconfig";
export var EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum;
(function (EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum) {
    EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum["Task"] = "TASK";
    EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum["AsisTemplate"] = "ASIS_TEMPLATE";
    EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum["IoTemplate"] = "IO_TEMPLATE";
})(EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum || (EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum = {}));
// EnterpriseCrmFrontendsEventbusProtoTaskEntity
/**
 * Contains a task's metadata and associated information. Next available id: 7
**/
var EnterpriseCrmFrontendsEventbusProtoTaskEntity = /** @class */ (function (_super) {
    __extends(EnterpriseCrmFrontendsEventbusProtoTaskEntity, _super);
    function EnterpriseCrmFrontendsEventbusProtoTaskEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabledForVpcSc" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmFrontendsEventbusProtoTaskEntity.prototype, "disabledForVpcSc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoTaskMetadata)
    ], EnterpriseCrmFrontendsEventbusProtoTaskEntity.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paramSpecs" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage)
    ], EnterpriseCrmFrontendsEventbusProtoTaskEntity.prototype, "paramSpecs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats" }),
        __metadata("design:type", EnterpriseCrmEventbusStats)
    ], EnterpriseCrmFrontendsEventbusProtoTaskEntity.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskEntity.prototype, "taskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uiConfig" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoTaskUiConfig)
    ], EnterpriseCrmFrontendsEventbusProtoTaskEntity.prototype, "uiConfig", void 0);
    return EnterpriseCrmFrontendsEventbusProtoTaskEntity;
}(SpeakeasyBase));
export { EnterpriseCrmFrontendsEventbusProtoTaskEntity };
