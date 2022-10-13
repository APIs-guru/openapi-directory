package shared

type EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate struct {
	AddedAdvertisers   []string `json:"addedAdvertisers"`
	RemovedAdvertisers []string `json:"removedAdvertisers"`
}
