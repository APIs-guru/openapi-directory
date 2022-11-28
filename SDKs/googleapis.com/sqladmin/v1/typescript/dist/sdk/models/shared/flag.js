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
export var FlagAppliesToEnum;
(function (FlagAppliesToEnum) {
    FlagAppliesToEnum["SqlDatabaseVersionUnspecified"] = "SQL_DATABASE_VERSION_UNSPECIFIED";
    FlagAppliesToEnum["Mysql51"] = "MYSQL_5_1";
    FlagAppliesToEnum["Mysql55"] = "MYSQL_5_5";
    FlagAppliesToEnum["Mysql56"] = "MYSQL_5_6";
    FlagAppliesToEnum["Mysql57"] = "MYSQL_5_7";
    FlagAppliesToEnum["Sqlserver2017Standard"] = "SQLSERVER_2017_STANDARD";
    FlagAppliesToEnum["Sqlserver2017Enterprise"] = "SQLSERVER_2017_ENTERPRISE";
    FlagAppliesToEnum["Sqlserver2017Express"] = "SQLSERVER_2017_EXPRESS";
    FlagAppliesToEnum["Sqlserver2017Web"] = "SQLSERVER_2017_WEB";
    FlagAppliesToEnum["Postgres96"] = "POSTGRES_9_6";
    FlagAppliesToEnum["Postgres10"] = "POSTGRES_10";
    FlagAppliesToEnum["Postgres11"] = "POSTGRES_11";
    FlagAppliesToEnum["Postgres12"] = "POSTGRES_12";
    FlagAppliesToEnum["Postgres13"] = "POSTGRES_13";
    FlagAppliesToEnum["Postgres14"] = "POSTGRES_14";
    FlagAppliesToEnum["Mysql80"] = "MYSQL_8_0";
    FlagAppliesToEnum["Mysql8018"] = "MYSQL_8_0_18";
    FlagAppliesToEnum["Mysql8026"] = "MYSQL_8_0_26";
    FlagAppliesToEnum["Mysql8027"] = "MYSQL_8_0_27";
    FlagAppliesToEnum["Mysql8028"] = "MYSQL_8_0_28";
    FlagAppliesToEnum["Mysql8029"] = "MYSQL_8_0_29";
    FlagAppliesToEnum["Mysql8030"] = "MYSQL_8_0_30";
    FlagAppliesToEnum["Sqlserver2019Standard"] = "SQLSERVER_2019_STANDARD";
    FlagAppliesToEnum["Sqlserver2019Enterprise"] = "SQLSERVER_2019_ENTERPRISE";
    FlagAppliesToEnum["Sqlserver2019Express"] = "SQLSERVER_2019_EXPRESS";
    FlagAppliesToEnum["Sqlserver2019Web"] = "SQLSERVER_2019_WEB";
})(FlagAppliesToEnum || (FlagAppliesToEnum = {}));
export var FlagTypeEnum;
(function (FlagTypeEnum) {
    FlagTypeEnum["SqlFlagTypeUnspecified"] = "SQL_FLAG_TYPE_UNSPECIFIED";
    FlagTypeEnum["Boolean"] = "BOOLEAN";
    FlagTypeEnum["String"] = "STRING";
    FlagTypeEnum["Integer"] = "INTEGER";
    FlagTypeEnum["None"] = "NONE";
    FlagTypeEnum["MysqlTimezoneOffset"] = "MYSQL_TIMEZONE_OFFSET";
    FlagTypeEnum["Float"] = "FLOAT";
    FlagTypeEnum["RepeatedString"] = "REPEATED_STRING";
})(FlagTypeEnum || (FlagTypeEnum = {}));
// Flag
/**
 * A flag resource.
**/
var Flag = /** @class */ (function (_super) {
    __extends(Flag, _super);
    function Flag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedIntValues" }),
        __metadata("design:type", Array)
    ], Flag.prototype, "allowedIntValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedStringValues" }),
        __metadata("design:type", Array)
    ], Flag.prototype, "allowedStringValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliesTo" }),
        __metadata("design:type", Array)
    ], Flag.prototype, "appliesTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inBeta" }),
        __metadata("design:type", Boolean)
    ], Flag.prototype, "inBeta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Flag.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxValue" }),
        __metadata("design:type", String)
    ], Flag.prototype, "maxValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minValue" }),
        __metadata("design:type", String)
    ], Flag.prototype, "minValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Flag.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiresRestart" }),
        __metadata("design:type", Boolean)
    ], Flag.prototype, "requiresRestart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Flag.prototype, "type", void 0);
    return Flag;
}(SpeakeasyBase));
export { Flag };
