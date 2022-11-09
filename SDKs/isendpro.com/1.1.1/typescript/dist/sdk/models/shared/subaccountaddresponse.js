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
import * as shared from "../shared";
var SubaccountAddResponseEtatEtat = /** @class */ (function (_super) {
    __extends(SubaccountAddResponseEtatEtat, _super);
    function SubaccountAddResponseEtatEtat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SubaccountAddResponseEtatEtat.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SubaccountAddResponseEtatEtat.prototype, "message", void 0);
    __decorate([
        Metadata({ data: "json, name=subAccountId" }),
        __metadata("design:type", String)
    ], SubaccountAddResponseEtatEtat.prototype, "subAccountId", void 0);
    __decorate([
        Metadata({ data: "json, name=subAccountKeyId" }),
        __metadata("design:type", String)
    ], SubaccountAddResponseEtatEtat.prototype, "subAccountKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=subAccountLogin" }),
        __metadata("design:type", String)
    ], SubaccountAddResponseEtatEtat.prototype, "subAccountLogin", void 0);
    return SubaccountAddResponseEtatEtat;
}(SpeakeasyBase));
export { SubaccountAddResponseEtatEtat };
var SubaccountAddResponseEtat = /** @class */ (function (_super) {
    __extends(SubaccountAddResponseEtat, _super);
    function SubaccountAddResponseEtat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=etat", elemType: shared.SubaccountAddResponseEtatEtat }),
        __metadata("design:type", Array)
    ], SubaccountAddResponseEtat.prototype, "etat", void 0);
    return SubaccountAddResponseEtat;
}(SpeakeasyBase));
export { SubaccountAddResponseEtat };
var SubaccountAddResponse = /** @class */ (function (_super) {
    __extends(SubaccountAddResponse, _super);
    function SubaccountAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=etat" }),
        __metadata("design:type", SubaccountAddResponseEtat)
    ], SubaccountAddResponse.prototype, "etat", void 0);
    return SubaccountAddResponse;
}(SpeakeasyBase));
export { SubaccountAddResponse };
