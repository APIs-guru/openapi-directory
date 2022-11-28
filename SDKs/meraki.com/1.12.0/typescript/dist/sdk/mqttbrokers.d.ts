import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MqttBrokers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkMqttBroker - Add an MQTT broker
     *
     * Add an MQTT broker
    **/
    createNetworkMqttBroker(req: operations.CreateNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkMqttBrokerResponse>;
    /**
     * deleteNetworkMqttBroker - Delete an MQTT broker
     *
     * Delete an MQTT broker
    **/
    deleteNetworkMqttBroker(req: operations.DeleteNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkMqttBrokerResponse>;
    /**
     * getNetworkMqttBroker - Return an MQTT broker
     *
     * Return an MQTT broker
    **/
    getNetworkMqttBroker(req: operations.GetNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMqttBrokerResponse>;
    /**
     * getNetworkMqttBrokers - List the MQTT brokers for this network
     *
     * List the MQTT brokers for this network
    **/
    getNetworkMqttBrokers(req: operations.GetNetworkMqttBrokersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMqttBrokersResponse>;
    /**
     * updateNetworkMqttBroker - Update an MQTT broker
     *
     * Update an MQTT broker
    **/
    updateNetworkMqttBroker(req: operations.UpdateNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkMqttBrokerResponse>;
}
