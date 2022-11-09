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
export var AuditLogConfigLogTypeEnum;
(function (AuditLogConfigLogTypeEnum) {
    AuditLogConfigLogTypeEnum["LogTypeUnspecified"] = "LOG_TYPE_UNSPECIFIED";
    AuditLogConfigLogTypeEnum["AdminRead"] = "ADMIN_READ";
    AuditLogConfigLogTypeEnum["DataWrite"] = "DATA_WRITE";
    AuditLogConfigLogTypeEnum["DataRead"] = "DATA_READ";
})(AuditLogConfigLogTypeEnum || (AuditLogConfigLogTypeEnum = {}));
// AuditLogConfig
/**
 * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
**/
var AuditLogConfig = /** @class */ (function (_super) {
    __extends(AuditLogConfig, _super);
    function AuditLogConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=exemptedMembers" }),
        __metadata("design:type", Array)
    ], AuditLogConfig.prototype, "exemptedMembers", void 0);
    __decorate([
        Metadata({ data: "json, name=logType" }),
        __metadata("design:type", String)
    ], AuditLogConfig.prototype, "logType", void 0);
    return AuditLogConfig;
}(SpeakeasyBase));
export { AuditLogConfig };
