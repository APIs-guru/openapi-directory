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
import { ExecAction } from "./execaction";
import { GrpcAction } from "./grpcaction";
import { HttpGetAction } from "./httpgetaction";
import { TcpSocketAction } from "./tcpsocketaction";
// Probe
/**
 * Not supported by Cloud Run Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
**/
var Probe = /** @class */ (function (_super) {
    __extends(Probe, _super);
    function Probe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exec" }),
        __metadata("design:type", ExecAction)
    ], Probe.prototype, "exec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureThreshold" }),
        __metadata("design:type", Number)
    ], Probe.prototype, "failureThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grpc" }),
        __metadata("design:type", GrpcAction)
    ], Probe.prototype, "grpc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpGet" }),
        __metadata("design:type", HttpGetAction)
    ], Probe.prototype, "httpGet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialDelaySeconds" }),
        __metadata("design:type", Number)
    ], Probe.prototype, "initialDelaySeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periodSeconds" }),
        __metadata("design:type", Number)
    ], Probe.prototype, "periodSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=successThreshold" }),
        __metadata("design:type", Number)
    ], Probe.prototype, "successThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tcpSocket" }),
        __metadata("design:type", TcpSocketAction)
    ], Probe.prototype, "tcpSocket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutSeconds" }),
        __metadata("design:type", Number)
    ], Probe.prototype, "timeoutSeconds", void 0);
    return Probe;
}(SpeakeasyBase));
export { Probe };
