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
import { MySqlSyncConfig } from "./mysqlsyncconfig";
export var SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum;
(function (SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum) {
    SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum["ExternalSyncModeUnspecified"] = "EXTERNAL_SYNC_MODE_UNSPECIFIED";
    SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum["Online"] = "ONLINE";
    SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum["Offline"] = "OFFLINE";
})(SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum || (SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum = {}));
// SqlInstancesVerifyExternalSyncSettingsRequest
/**
 * Instance verify external sync settings request.
**/
var SqlInstancesVerifyExternalSyncSettingsRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesVerifyExternalSyncSettingsRequest, _super);
    function SqlInstancesVerifyExternalSyncSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mysqlSyncConfig" }),
        __metadata("design:type", MySqlSyncConfig)
    ], SqlInstancesVerifyExternalSyncSettingsRequest.prototype, "mysqlSyncConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syncMode" }),
        __metadata("design:type", String)
    ], SqlInstancesVerifyExternalSyncSettingsRequest.prototype, "syncMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verifyConnectionOnly" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesVerifyExternalSyncSettingsRequest.prototype, "verifyConnectionOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verifyReplicationOnly" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesVerifyExternalSyncSettingsRequest.prototype, "verifyReplicationOnly", void 0);
    return SqlInstancesVerifyExternalSyncSettingsRequest;
}(SpeakeasyBase));
export { SqlInstancesVerifyExternalSyncSettingsRequest };
